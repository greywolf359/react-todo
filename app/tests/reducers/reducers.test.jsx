var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');

describe('reducers', ()=>{
	describe('searchTextReducer', ()=>{
		it('should set searchText', ()=>{
			var action = {
				type: 'SET_SEARCH_TEXT',
				searchText: 'something'
			}
			var res = reducers.searchTextReducer(df(''), df(action));
			expect(res).toEqual(action.searchText);
		});
	});	

	describe('toggleShowCompleted',()=>{
		it('should toggle showCompleted', ()=>{
			var action = {
				type: 'TOGGLE_SHOW_COMPLETED',
			}
			var res = reducers.showCompletedReducer(df(false), df(action));
		});
	});

	describe('todoREducer', ()=>{
		it('should add new todo', ()=>{
			var action = {
				type: "ADD_TODO",
				todo: {
					id: "abc",
					todo: "text",
					completed: false,
					createdAt: 98765433
				}
			}

			var res = reducers.todoReducer(df([]), df(action));
			expect(res.length).toEqual(1);
			expect(res[0]).toBe(action.todo);

		});

		it('should toggle the todo', ()=>{
			var todos = [{
				todo: "do something",
				id: 1,
				completed: true,
				completedAt: 125,
				createdAt: 123
			}];
			var updates = {
				completed: false,
				completedAt: null
			}
			var action ={
				id: todos[0].id, 
				type: "UPDATE_TODO",
				updates

			}

			var res = reducers.todoReducer(df(todos), df(action));
			expect(res[0].completed).toBe(updates.completed);
			expect(res[0].completedAt).toEqual(updates.completedAt);
			expect(res[0].todo).toEqual(todos[0].todo);
		})

		it("should add existing todos",()=>{
			var todos=[{
				id: 111,
				todo: "whatever",
				completedAt: undefined,
				completed: false,
				createdAt: 33000
			}];
			var action = {
				type: 'ADD_TODOS',
				todos
			}

			var res = reducers.todoReducer(df([]), df(action));
			expect(res.length).toEqual(1);
			expect(res[0]).toEqual(todos[0]);
		})
	})
});