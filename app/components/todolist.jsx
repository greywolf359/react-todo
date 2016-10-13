import React from "react";
var Todo = require("Todo");
var AddTodo = require("AddTodo");

var TodoList = React.createClass({

	handleAddTodo: function(text){
		alert(text);
	},

	render: function(){
		var {todos} = this.props;

		var renderTodos = ()=>{
			return todos.map((todo)=>{
				return(
					<Todo key = {todo.id} {...todo}/>
				)
			})
		}
		return(
			<div>
				{renderTodos()}
				<AddTodo onAddTodo={this.handleAddTodo}/>
			</div>
		)
	}
})

module.exports = TodoList;