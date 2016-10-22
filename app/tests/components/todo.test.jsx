import expect from 'expect';
import testUtils from "react-addons-test-utils";
import ReactDOM from "react-dom";
import React from "react";
import * as actions from 'actions';
var $ = require("jQuery");
import {Todo} from "todo";

describe("Todo",()=>{
	it("should exist", ()=>{
	expect(Todo).toExist();
	});

	
	it("should dispatch TOGGLE_TODO action on click", ()=>{
		var todo_data = {
			id: 199,
			todo: 'test',
			completed: true
		}
		
		var action = actions.startToggleTodo(todo_data.id, !todo_data.completed);
		var spy = expect.createSpy();
		
		var todo = testUtils.renderIntoDocument(<Todo {...todo_data} dispatch={spy}/>);
		
		var $el = $(ReactDOM.findDOMNode(todo));

		testUtils.Simulate.click($el[0]);
		expect(spy).toHaveBeenCalledWith(action);

	})
	
});
