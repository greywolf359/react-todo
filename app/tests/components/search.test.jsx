import expect from 'expect';
import testUtils from "react-addons-test-utils";
import ReactDOM from "react-dom";
import React from "react";
var $ = require("jQuery");
var Search = require("Search");

describe("Search", ()=>{
	it("should exist", ()=>{
		expect(Search).toExist();
	});

	it("should call onsearch with entered input text",()=>{
		var searchText = "cat";
		var spy = expect.createSpy();
		var search = testUtils.renderIntoDocument(<Search onSearch = {spy}/>);
		search.refs.search_text.value = searchText;
		testUtils.Simulate.change(search.refs.search_text);
		expect(spy).toHaveBeenCalledWith(false, "cat");
	});

	it("should call onsearch with proper checked value", ()=>{
		var spy  = expect.createSpy();
		var search = testUtils.renderIntoDocument(<Search onSearch = {spy}/>);
		search.refs.show_completed.checked = true;
		testUtils.Simulate.change(search.refs.show_completed);
		expect(spy).toHaveBeenCalledWith(true,"");

	});
})
