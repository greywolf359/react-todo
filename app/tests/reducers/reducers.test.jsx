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
				todo: 'walk dog'
			}

			var res = reducers.todoReducer(df([]), df(action));
			expect(res.length).toEqual(1);
			expect(res[0].todo).toBe(action.todo);

		});

		it('should toggle the todo', ()=>{
			var todo = [{
				todo: "do something",
				id: 1,
				completed: true,
				completedAt: 125,
				createdAt: 123
			}];
			var action ={id: 1, type: "TOGGLE_TODO",}

			var res = reducers.todoReducer(df(todo), df(action));
			expect(res[0].completed).toBe(false);
			expect(res[0].completedAt).toEqual(undefined);
		})
	})
});