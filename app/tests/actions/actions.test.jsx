import configureMockStore from "redux-mock-store";
import thunk from 'redux-thunk';
import firebase, {firebaseRef} from 'app/firebase';
import * as actions from 'actions';
var expect = require('expect');
//var actions = require('actions');



var createMockStore = configureMockStore([thunk]);

describe('actions', ()=>{
	it('should generate search text actions', ()=>{
		var action = {
			type: 'SET_SEARCH_TEXT',
			searchText: 'some text'
		}
		var res = actions.setSearchText(action.searchText);
		expect(res).toEqual(action)
	})

	it('should generate add todo action', ()=>{
		var action = {
			type: 'ADD_TODO',
			todo:{
				id: "1234",
				todo: 'thing to do',
				completed: false,
				createdAt: 0
			}
		}

		var res = actions.addTodo(action.todo);
		expect(res).toEqual(action);
	})

	it('should create todo and disatch ADD_TODO', (done)=>{
		const store = createMockStore({});
		const todoText = 'my todo item';

		store.dispatch(actions.startAddTodo(todoText)).then(()=>{
			const actions = store.getActions();
			expect(actions[0]).toInclude({
				type: 'ADD_TODO'
			});
			expect(actions[0].todo).toInclude({
				todo: todoText
			});
			done();
		}).catch(done);
	})

	it('should generate add todo object', ()=>{
		var todos={
			id: 111,
			todo: "whatever",
			completedAt: undefined,
			completed: false,
			createdAt: 33000
		}
		var action = {
			type: 'ADD_TODOS',
			todos
		}

		var res = actions.addTodos(todos);
		expect(res).toEqual(action);
	})

	it('should generate showCompleted toggle action', ()=>{
		var action = {
			type: 'TOGGLE_SHOW_COMPLETED'
		}
		var res = actions.toggleShowCompleted();
		expect(res).toEqual(action);
	})

	it('should generate update todo action', ()=>{
		var action = {
			type: 'UPDATE_TODO',
			id: 1,
			updates: {completed: false}
		}
		var res = actions.updateTodo(action.id, action.updates);
		expect(res).toEqual(action);
	})
})

describe("test with firebase todos", ()=>{
	var testTodoRef;

	beforeEach((done) =>{
		var todosRef = firebaseRef.child('todos');
		todosRef.remove().then(()=>{
			testTodoRef = firebaseRef.child('todos').push();
			
			testTodoRef.set({
				todo: 'something to do',
				completed: false,
				createAt: 12345556
			})
		})
		.then(() => done())
		.catch(done);
	});
		
	afterEach((done) =>{
		testTodoRef.remove().then(()=>{
			done();
		})
	});
	
	it('should gettodo back from startAddTodo', (done)=>{
		const store = createMockStore({});
		const action = actions.startAddTodo();

		store.dispatch(action).then(()=>{
			const mockActions = store.getActions();
		}, done);

		console.log("mockactions", mockActions);

		expect(mockActions[0].type).toEqual('ADD_TODOS');
		//expect(mockActions[0].todos.length).toEqual(1);
		//expect(mockActions[0].todos[0].todo).toEqual('something to do');
		done();
	})

	it('should toggle todo and dispatch UPDATE_TODO action', (done) => {
	  const store = createMockStore({});
      const action = actions.startToggleTodo(testTodoRef.key, true);

      store.dispatch(action).then(() => {
        const mockActions = store.getActions();

        expect(mockActions[0]).toInclude({
          type: 'UPDATE_TODO',
          id: testTodoRef.key
        });
        expect(mockActions[0].updates).toInclude({
          completed: true
        });
        expect(mockActions[0].updates.completedAt).toExist();

        done();
      }, done);
    });


	/*
	it('should toggle todo and dispatch update todo action', (done)=>{
		const store = createMockStore({});
		const action = actions.startToggleTodo(testTodoRef.key, true);
		console.log('store, action', store, action);

		store.dispatch(action).then(()=>{
			const mockActions = store.getActions();

			expect(mockActions[0]).toInclude({
				type: 'UPDATE_TODO',
				Id: testTodoRef.key,
			});
			expect(mockActions[0].updates).toInclude({
				completed: true
			});
			expect(mockeActions[0].updates.completedAt).toExist();
			done();
		},done)
	})
	*/
})
