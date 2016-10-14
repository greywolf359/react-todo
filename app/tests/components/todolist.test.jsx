import expect from 'expect';
import TestUtils from "react-addons-test-utils";
import ReactDOM from "react-dom";
import React from "react";
var $ = require("jQuery");
var TodoList = require("TodoList");
var Todo = require("Todo");

describe("TodoList",()=>{
	it("should exist", ()=>{
	expect(TodoList).toExist();
	});

	it("should render once todo component for each todo item",()=>{
		var todos = [{id: 1, todo: "do something"}, {id: 2, todo: "checkmail"}];
		var todoList = TestUtils.renderIntoDocument(<TodoList todos = {todos}/>);
		//checks to see how many components are rendered under another component(parentComp, childComp)
		var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

		expect(todosComponents.length).toBe(todos.length);

	})

	it("should render no todos if todos is empty",()=>{
		var todos = [];
		var todoList = TestUtils.renderIntoDocument(<TodoList todos = {todos}/>);
		//checks to see how many components are rendered under another component(parentComp, childComp)
		var $el = $(ReactDOM.findDOMNode(todoList));
		expect($el.find('.container_message').length).toBe(1);

	})
});