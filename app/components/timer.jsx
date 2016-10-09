import React from 'react';
var Clock = require("Clock");
var Controls = require("Controls");

var Timer = React.createClass({

	getInitialState: function(){
		return{
			count: 0,
			timerStatus: 'stopped'
		}
	},

	handleStatusChange: function(status){
		this.setState({timerStatus: status});
		console.log(status);
	},

	componentDidUpdate: function(prevProps, prevState){
		if (prevState.timerStatus !== this.state.timerStatus){

			switch(this.state.timerStatus){

				case 'started':
					this.startTimer();
					break;
				case 'stopped':
					this.setState({count: 0});
				case 'paused':
					clearInterval(this.timer);
					this.timer = undefined;
					break;
			}
		}
	},

	startTimer: function(){
		
		this.timer = setInterval(()=>{
			var {count} = this.state;
			this.setState({count: count + 1});
		},1000);
	},

	render: function(){
		var {count, timerStatus} = this.state;
		return (
		<div>
		<h1 className = "page-title">Timer App</h1>
			<Clock totalSeconds = {count}/>
			<Controls countdownStatus = {timerStatus} onStatusChange = {this.handleStatusChange}/>
		</div>
		)
	}
})

module.exports = Timer;