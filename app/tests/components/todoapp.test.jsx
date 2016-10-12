import expect from 'expect';
import testUtils from "react-addons-test-utils";
import ReactDOM from "react-dom";
import React from "react";
var $ = require("jQuery");
var TodoApp = require("TodoApp");

describe("TodoApp",()=>{
	it("should exist", ()=>{
	expect(TodoApp).toExist();
	});
});
