import expect from 'expect';
import testUtils from "react-addons-test-utils";
import ReactDOM from "react-dom";
import React from "react";
import {Provider} from 'react-redux';
var $ = require("jQuery");
import {TodoApp} from 'todoapp';
//var TodoApp = require("TodoApp");
var Todo = require("Todo");

var configureStore = require('configureStore');
import TodoList from 'todolist';


describe("TodoApp",()=>{
	it("should exist", ()=>{
	expect(TodoApp).toExist();
	});

	it("should render todoList", ()=>{
		var store = configureStore.configure();
		var provider = testUtils.renderIntoDocument(
			<Provider store={store}>
				<TodoApp/>
			</Provider>
		);
		var todoApp = testUtils.scryRenderedComponentsWithType(provider, TodoApp)[0];
		var todoList = testUtils.scryRenderedComponentsWithType(todoApp, TodoList);

		expect(todoList.length).toEqual(1);
	})
});
