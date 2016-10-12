import React from "react";

var Todo = React.createClass({


	render: function(){
		var {todo, id} = this.props;
		return(
			<div>{`${id}: ${todo}`}</div>
		)
	}
});

module.exports = Todo;
