import React from "react";

var Todo = React.createClass({



	render: function(){
		var {todo, id, completed} = this.props;
		return(
			<div onClick={()=>{
				this.props.onToggle(id);
			}}>
				<input type = "checkbox" checked = {completed}/>
				{`${todo}`}
			</div>
		)
	}
});

module.exports = Todo;
