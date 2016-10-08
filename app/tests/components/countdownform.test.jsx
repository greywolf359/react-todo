

import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';

var $ = require('jQuery');
var testUtils = require('react-addons-test-utils');
var CountdownForm = require('CountdownForm');


describe("countdownform",()=>{
	it('should exist', () =>{
		expect(CountdownForm).toExist();
	});

	it('should call onSetCountdown if valid seconds entered', ()=>{
		var spy = expect.createSpy();
		var countdownform = testUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
		var $el = $(ReactDOM.findDOMNode(countdownform));
		countdownform.refs.seconds.value = '109';
		testUtils.Simulate.submit($el.find('form')[0]);
		expect(spy).toHaveBeenCalledWith(109);
	})


	it('should not call onSetCountdown if invalid seconds entered', ()=>{
		var spy = expect.createSpy();
		var countdownform = testUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
		var $el = $(ReactDOM.findDOMNode(countdownform));
		countdownform.refs.seconds.value = 'a';
		testUtils.Simulate.submit($el.find('form')[0]);
		expect(spy).toNotHaveBeenCalled();
	})

	it('should be called at least with once 12345', () =>{
		var spy = expect.createSpy();
		var countdownform = testUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
		var $el = $(ReactDOM.findDOMNode(countdownform));
		countdownform.refs.seconds.value = "12345";
		testUtils.Simulate.submit($el.find('form')[0]);
		expect(spy).toHaveBeenCalled();

	})
});
