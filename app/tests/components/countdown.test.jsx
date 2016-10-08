import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
var testUtils = require('react-addons-test-utils');
var Countdown = require('Countdown');

describe("Clock Countdown", ()=>{
	it("should exist", ()=>{
		expect(Countdown).toExist();
	});

	describe('handlesetcountdown', ()=>{
		it("should set state to started and count down", ()=>{
			var countdown = testUtils.renderIntoDocument(<Countdown/>);
			countdown.handleSetCountdown(10);

			expect(countdown.state.count).toBe(10);
			expect(countdown.state.countdownStatus).toBe('started');

			setTimeout(()=>{
				expect(countdown.state.count).toBe(9);
				done();
			}, 1001)
		});
	});

	describe('handlesetcountdown', ()=>{
		it("something about a negative number", ()=>{
			var countdown = testUtils.renderIntoDocument(<Countdown/>);
			countdown.handleSetCountdown(1);

			setTimeout(()=>{
				expect(countdown.state.count).toBe(0);
				done();
			}, 3001)
		});
	});
});