import configureMockStore from "redux-mock-store";
import thunk from 'redux-thunk';
var expect = require('expect');
var actions = require('actions');



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

	it('should generate toggle todo action', ()=>{
		var action = {
			type: 'TOGGLE_TODO',
			id: 1
		}
		var res = actions.toggleTodo(action.id);
		expect(res).toEqual(action);
	})
})