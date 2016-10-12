import expect from 'expect';
import testUtils from "react-addons-test-utils";
import ReactDOM from "react-dom";
import React from "react";
var $ = require("jQuery");
var Todo = require("Todo");

describe("Todo",()=>{
	it("should exist", ()=>{
	expect(Todo).toExist();
	});
});
