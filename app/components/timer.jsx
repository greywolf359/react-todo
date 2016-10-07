import React from 'react';
var Clock = require("Clock");

var Timer = React.createClass({
	render: function(){
		return (
		<div>
			<Clock/>
		</div>
		)
	}
})

module.exports = Timer;