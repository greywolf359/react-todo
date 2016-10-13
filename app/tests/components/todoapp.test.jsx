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

	})
});
