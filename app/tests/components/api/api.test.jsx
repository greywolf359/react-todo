var expect = require('expect');
var TodoAPI = require('todo_api');

describe("todoAPI", ()=>{

	beforeEach(()=>{
		localStorage.removeItem('todos');
	});
	it("should exist",()=>{
		expect(TodoAPI).toExist();
	});

	describe("settodos", ()=>{
		it("should set valid todo array",()=>{
			var todos = [{
				id: 23,
				todo: "test files",
				completed: false
			}];
			TodoAPI.setTodos(todos);

			var actualTodos = JSON.parse(localStorage.todos);
			expect(actualTodos).toEqual(todos);
		});

		it("should not set invalid todo array",()=>{
			var bad_todos = {a: 'b'};
			TodoAPI.setTodos(bad_todos);
			expect(localStorage.getItem('todos')).toBe(null);
		})
	});

	describe("gettodos", ()=>{
		it("should get an empty array if invalid array",()=>{
			var actualTodos = TodoAPI.getTodos();
			expect(actualTodos).toEqual([]);
		});

		it('should get a valid array in localStorage', ()=>{
			var todos = [{
				id: 23,
				todo: "test files",
				completed: false
			}];

			localStorage.setItem("todos", JSON.stringify(todos));
			var actualTodos = TodoAPI.getTodos();
			expect(actualTodos).toEqual(todos);

		})
	});

	describe('filtertodos', ()=>{
		var todos = [
			{
				id: 1,
				todo: "test1",
				completed: true
			},
			{
				id: 2,
				todo: "some test2",
				completed: false
			},
			{
				id: 3,
				todo: "test3",
				completed: true
			}
		]

		it('should return all items if showcompleted is true',()=>{
			var filteredTodos = TodoAPI.filterTodos(todos, true, '');
			expect(filteredTodos.length).toBe(3);
		})

		it('should return noncompleted items if showcompleted is false',()=>{
			var filteredTodos = TodoAPI.filterTodos(todos, false, '');
			expect(filteredTodos.length).toBe(1);
		});

		it('should sort by completed status', ()=>{
			var filteredTodos = TodoAPI.filterTodos(todos, true, '');
			expect(filteredTodos[0].completed).toBe(false);
		});

		it('should filter todos by search text',()=>{
			var filteredTodos = TodoAPI.filterTodos(todos, true, 'some');
			expect(filteredTodos.length).toBe(1);
		});

		it('should return all items if search text is empty',()=>{
			var filteredTodos = TodoAPI.filterTodos(todos, true, '');
			expect(filteredTodos.length).toBe(3);
		});
	})
});