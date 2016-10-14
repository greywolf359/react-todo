import React from "react";
var Todo = require("Todo");


var TodoList = React.createClass({

	
	render: function(){
		var {todos, onToggle} = this.props;



		var renderTodos = ()=>{
			if(todos.length === 0){
					return(<p className = "container_message">Nothing to do.</p>);
				}
			return todos.map((todo)=>{
				return(
					<Todo key = {todo.id} {...todo} onToggle={onToggle}/>
				)
			})
		}
		return(
			<div>
				{renderTodos()}
				
			</div>
		)
	}
})

module.exports = TodoList;