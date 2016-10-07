import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
var testUtils = require('react-addons-test-utils');
var Clock = require('Clock');

describe('Clock', ()=>{
	it('should exist', ()=>{
		expect(Clock).toExist();
	});

	describe('render', ()=>{
		it('should render clock to output', ()=>{
			var clock = testUtils.renderIntoDocument(<Clock totalSeconds = {62}/>);
			var $el = $(ReactDOM.findDOMNode(clock));
			var actualText = $el.find('.clock-text').text();

			expect(actualText).toBe('01:02');
		});
	});


	describe('formatSeconds', ()=>{
		it('should format', ()=>{
			var clock = testUtils.renderIntoDocument(<Clock/>);
			var seconds = 615;
			var expected = '10:15';
			var actual = clock.formatSeconds(seconds);

			expect(actual).toBe(expected);
		});
		it('should format seconds when min/sec less than 10', ()=>{
			var clock = testUtils.renderIntoDocument(<Clock/>);
			var seconds = 61;
			var expected = '01:01';
			var actual = clock.formatSeconds(seconds);

			expect(actual).toBe(expected);
		});
	});
});

