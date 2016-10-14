import React from "react";
var moment = require("moment");

var Todo = React.createClass({



	render: function(){
		var {todo, id, completed, createdAt, completedAt} = this.props;
		var todoClassName = completed ? 'todo todo_completed': 'todo';
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
			<div className = {todoClassName} onClick={()=>{
				this.props.onToggle(id);
			}}>
				<div>
					<input type = "checkbox" checked = {completed} ref = "toggle_completed"/>
				</div>
				<div>
					<p className = "todo_item">{`${todo}`}</p>
					<p className = "todo_subtext">{renderDate()}</p>
				</div>
			</div>
		)
	}
});

module.exports = Todo;
