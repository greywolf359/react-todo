import React from "react";

var CountdownForm = React.createClass({



	onSubmit: function(e){
		e.preventDefault();
		var strSeconds = this.refs.seconds.value;

		console.log('input count', $('input').length);

		if(strSeconds.match(/^[0-9]*$/)){
			this.props.onSetCountdown(parseInt(strSeconds, 10));
		}
	},

	render: function(){
		return(
			<div>
				<form onSubmit = {this.onSubmit} ref = "form" className = "countdown-form">
					<input type = "text" ref = "seconds" placeholder = "Enter time in seconds"/>
					<button className = "button expanded">Start</button>
				</form>


			</div>
		)
	}
});

module.exports = CountdownForm;