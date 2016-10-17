import expect from 'expect';
import testUtils from "react-addons-test-utils";
import ReactDOM from "react-dom";
import React from "react";
var $ = require("jQuery");
var {Todo} = require("Todo");

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
		var spy = expect.createSpy();
		var todo = testUtils.renderIntoDocument(<Todo {...todo_data} dispatch={spy}/>);
		var $el = $(ReactDOM.findDOMNode(todo));

		testUtils.Simulate.click($el[0]);
		expect(spy).toHaveBeenCalledWith({type: "TOGGLE_TODO", id: todo_data.id});

	})
});
