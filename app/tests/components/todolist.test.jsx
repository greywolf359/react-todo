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
		var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

		expect(todosComponents.length).toBe(todos.length);

	})
});