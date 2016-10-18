var expect = require('expect');
var actions = require('actions');

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
			todo: 'thing to do'
		}

		var res = actions.addTodo(action.todo);
		expect(res).toEqual(action);
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