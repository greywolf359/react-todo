import expect from 'expect';
import testUtils from "react-addons-test-utils";
import ReactDOM from "react-dom";
import React from "react";
var $ = require("jQuery");
var TodoApp = require("TodoApp");
var Todo = require("Todo");

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
		expect(todo_app.state.todos[0].createdAt).toBeA('number');
		

	});

	it('should toggle completed value when handletoggle called',()=>{
		var todo_data = {
			id: 11,
			todo: "whatever",
			completed: false,
			createdAt: 0,
			completedAt: undefined
		}
		var todoapp = testUtils.renderIntoDocument(<TodoApp/>);
		todoapp.setState({todos: [todo_data]});
		expect(todoapp.state.todos[0].completed).toBe(false);
		todoapp.handleToggle(11);
		expect(todoapp.state.todos[0].completed).toBe(true);
		expect(todoapp.state.todos[0].completedAt).toBeA('number');
		
	});

	//test that when toggled from true to false completedAt gets removed

	it('should remove completedAt when completed is toggled', ()=>{
		var todo_data = {
			id: 11,
			todo: "whatever",
			completed: true,
			createdAt: 0,
			completedAt: 123
		}
		var todoapp = testUtils.renderIntoDocument(<TodoApp/>);
		todoapp.setState({todos: [todo_data]});
		expect(todoapp.state.todos[0].completed).toBe(true);
		todoapp.handleToggle(11);
		expect(todoapp.state.todos[0].completed).toBe(false);
		expect(todoapp.state.todos[0].completedAt).toNotExist();
		
	});


});
