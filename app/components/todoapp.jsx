import React from 'react';
import uuid from 'node-uuid';
import TodoList from 'todolist';
import Search from 'search';
import AddTodo from 'addTodo';
var moment = require('moment');


console.log("app firing");
var TodoApp = React.createClass({

	render: function(){
		return(
			<div>
				<h1 className = "page-title">Todo App</h1>
				<div className = "row">
					<div className = "column small-centered small-11 medium-6 large-5">
						<div className = "container">
							<Search/>
							<TodoList/>
							<AddTodo/>
						</div>
					</div>
				</div>
			</div>
		)
	}
});

module.exports = TodoApp;

/*
handleToggle: function(id){
		var updated_todos = this.state.todos.map((todo)=>{
			if (todo.id === id){
				todo.completed = !todo.completed;
				todo.completedAt = todo.completed ? moment().unix() : undefined;
			}
			return todo;
		})

		this.setState({todos: updated_todos});
	},

*/