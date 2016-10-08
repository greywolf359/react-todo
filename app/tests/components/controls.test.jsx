import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
var testUtils = require('react-addons-test-utils');
var Controls = require("Controls");

describe("Controls", ()=>{
	it('should exist', ()=>{
		expect(Controls).toExist();
	});

	describe("render", ()=>{
		it("should render pause when started", ()=>{
			var controls = testUtils.renderIntoDocument(<Controls countdownStatus = "started"/>);
			var $el = $(ReactDOM.findDOMNode(controls));
			var $pauseButton = $el.find('button:contains(Pause)');
			expect($pauseButton.length).toBe(1);
		});

		it("should render start button when paused", ()=>{
			var controls = testUtils.renderIntoDocument(<Controls countdownStatus = "paused"/>);
			var $el = $(ReactDOM.findDOMNode(controls));
			var $pauseButton = $el.find('button:contains(Start)');
			expect($pauseButton.length).toBe(1);
		})
	});

	/*
	describe("start", ()=>{
		it("should render start button when paused", ()=>{
			var controls = testUtils.renderIntoDocument(<Controls countdownStatus = "paused"/>);
			var $el = $(ReactDOM.findDOMNode(controls));
			var $pauseButton = $el.find('button:contains(Start)');
			expect($pauseButton.length).toBe(1);
		})
	})
	*/

});