import expect from 'expect';
import testUtils from "react-addons-test-utils";
import ReactDOM from "react-dom";
import React from "react";
var $ = require("jQuery");
import {Search} from 'search';


describe("Search", ()=>{
	it("should exist", ()=>{
		expect(Search).toExist();
	});

	it("should dispatch SET_SEARCH_TEXT on input change",()=>{
		var searchText = "cat";
		var action = {
			type: 'SET_SEARCH_TEXT',
			searchText
		}
		var spy = expect.createSpy();
		var search = testUtils.renderIntoDocument(<Search dispatch = {spy}/>);
		search.refs.search_text.value = searchText;
		testUtils.Simulate.change(search.refs.search_text);
		expect(spy).toHaveBeenCalledWith(action);
	});

	it("should dispatch TOGGLE_SHOW_COMPLETED when checkbox checked", ()=>{
		var action = {
			type: 'TOGGLE_SHOW_COMPLETED',
		}
		var spy  = expect.createSpy();
		var search = testUtils.renderIntoDocument(<Search dispatch = {spy}/>);
		search.refs.show_completed.checked = true;
		testUtils.Simulate.change(search.refs.show_completed);
		expect(spy).toHaveBeenCalledWith(action);

	});
})
