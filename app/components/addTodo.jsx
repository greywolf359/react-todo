import React from 'react';

var AddTodo = React.createClass({

	handleSubmit: function(e){
		e.preventDefault();
		var todo_text = this.refs.todo_text.value;
		if(typeof todo_text === "string" && todo_text.length > 0){
			this.props.onAddTodo(todo_text);
			this.refs.todo_text.value ="";
		}else{
			this.refs.todo_text.focus();
		}	
	},
	render: function (){
		return (
			<div className = "container_footer">
				<form onSubmit = {this.handleSubmit}id = "todo_form">
				<input type = "text" placeholder = "Add Todo Item Here" ref="todo_text"/>
				<button className = "button expanded">Add Todo Item</button>
				</form>
			</div>
		)
	}
});

module.exports = AddTodo;