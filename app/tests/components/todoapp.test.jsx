import expect from 'expect';
import testUtils from "react-addons-test-utils";
import ReactDOM from "react-dom";
import React from "react";
var $ = require("jQuery");
var TodoApp = require("TodoApp");

describe("TodoApp",()=>{
	it("should exist", ()=>{
	expect(TodoApp).toExist();
	});

	it("should add todo to the todo state on handletodo", ()=>{
		var todo_text = "test string";
		var todo_app = testUtils.renderIntoDocument(<TodoApp/>);
		todo_app.setState({todos: []});

		todo_app.handleAddTodo(todo_text);

		expect(todo_app.state.todos[0].todo).toBe(todo_text);

	});

	it('should toggle completed value when handletoggle called',()=>{
		var todo_data = {
			id: 11,
			todo: "whatever",
			completed: false
		}
		var todoapp = testUtils.renderIntoDocument(<TodoApp/>);
		todoapp.setState({todos: [todo_data]});
		expect(todoapp.state.todos[0].completed).toBe(false);
		todoapp.handleToggle(11);
		expect(todoapp.state.todos[0].completed).toBe(true);
	});
});
