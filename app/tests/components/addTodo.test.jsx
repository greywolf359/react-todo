import expect from 'expect';
import testUtils from "react-addons-test-utils";
import ReactDOM from "react-dom";
import React from "react";
var $ = require("jQuery");
var {AddTodo} = require("AddTodo");


describe("Add Todo",()=>{
	it("should exist", ()=>{
	expect(AddTodo).toExist();
	});

	/*
	testing a form
		1. create a spy 
		2. render the component
		3. find the rendered component in the dom
		4. give the input element data, if necessary
		5. use testUtils to simulate a submit action
		6. write the assertion with the desired method and expected data
	*/

	it("should dispatch ADD_TODO when valid todo text",()=>{
		var todoText = "check mail";
		var action = {
			type: "ADD_TODO",
			todo: todoText
		}
		var spy = expect.createSpy();
		var addtodo = testUtils.renderIntoDocument(<AddTodo dispatch = {spy}/>);
		var $el = $(ReactDOM.findDOMNode(addtodo));
		addtodo.refs.todo_text.value = todoText;
		testUtils.Simulate.submit($el.find('form')[0]);
		expect(spy).toHaveBeenCalledWith(action);

	});

	it("should not dispatch ADD_TODO when invalid todo text", ()=>{
		var spy = expect.createSpy();
		var addtodo = testUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
		var $el = $(ReactDOM.findDOMNode(addtodo));
		addtodo.refs.todo_text.value = "";
		testUtils.Simulate.submit($el.find('#todo_form')[0]);
		expect(spy).toNotHaveBeenCalled();

	});
});