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

	
});