import expect from 'expect';
import TestUtils from "react-addons-test-utils";
import ReactDOM from "react-dom";
import React from "react";
import {Provider} from "react-redux";
var $ = require("jQuery");
import {configure} from 'configureStore';
import ConnectedTodoList, {TodoList} from 'todolist';
import ConnectedTodo, {Todo} from 'todo';


describe("TodoList",()=>{
	it("should exist", ()=>{
	expect(TodoList).toExist();
	});

	it("should render one todo component for each todo item",()=>{
		var todos = [
			{
			id: 1, 
			todo: "do something",
			completed: false,
			createdAt: undefined,
			completedAt: 500
			}, 
			{
			id: 2,
			todo: "checkmail",
			completed: false,
			createdAt: undefined,
			completedAt: 500
			}
		];
		var store = configure({todos});
		var provider = TestUtils.renderIntoDocument(
			<Provider store = {store}>
				<ConnectedTodoList/>
			</Provider>
		);
		var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
		//checks to see how many components are rendered under another component(parentComp, childComp)
		var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);
		expect(todosComponents.length).toBe(2);

	})

	it("should render no todos if todos is empty",()=>{
		var todos = [];
		var todoList = TestUtils.renderIntoDocument(<TodoList todos = {todos}/>);
		//checks to see how many components are rendered under another component(parentComp, childComp)
		var $el = $(ReactDOM.findDOMNode(todoList));
		expect($el.find('.container_message').length).toBe(1);

	})
});