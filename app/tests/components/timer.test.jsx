import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
var testUtils = require('react-addons-test-utils');
var Timer = require('Timer');

describe('timer', ()=>{
	it("should exist", ()=>{
		expect(Timer).toExist();
	});

	it('should start timer on start status',()=>{
		var timer = testUtils.renderIntoDocument(<Timer/>);
		timer.handleStatusChange("started");
		expect(timer.state.count).toBe(0);
		setTimeout(()=>{
			expect(timer.state.count).toBe(1);
			expect(timer.state.timerStatus).toBe('started');
			done();
		}, 1001)
	});

	it('should pause timer on pause status',()=>{
		var timer = testUtils.renderIntoDocument(<Timer/>);
		timer.setState({count: 10});
		timer.handleStatusChange("started");
		timer.handleStatusChange("paused");
		setTimeout(()=>{
			expect(timer.state.count).toBe(10);
			expect(timer.state.timerStatus).toBe('paused');
			done();
		}, 1001)
	});

	it('should stop timer on stopped status',()=>{
		var timer = testUtils.renderIntoDocument(<Timer/>);
		timer.setState({count: 10});
		timer.handleStatusChange("stopped");
		
		setTimeout(()=>{
			expect(timer.state.count).toBe(0);
			expect(timer.state.timerStatus).toBe('stopped');
			done();
		}, 1001)
	});

	
})