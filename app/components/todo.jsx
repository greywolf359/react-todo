import React from "react";
var moment = require("moment");

var Todo = React.createClass({



	render: function(){
		var {todo, id, completed, createdAt, completedAt} = this.props;
		var renderDate = ()=>{
			var message = "Created ";
			var timestamp = createdAt;

			if(completed){
				message = "Completed";
				timestamp = completedAt;
			}
			return message + moment.unix(timestamp).format('MMM do YYYY @ h:mm a');
		}
		return(
			<div onClick={()=>{
				this.props.onToggle(id);
			}}>
				<input type = "checkbox" checked = {completed} ref = "toggle_completed"/>
				{`${todo}`}
				<p>{renderDate()}</p>
			</div>
		)
	}
});

module.exports = Todo;
