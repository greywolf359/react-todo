import React from 'react';
import uuid from 'node-uuid';
import TodoList from 'todolist';
var Search = require("Search");
import AddTodo from 'addTodo';
var todoAPI = require("todo_api");
var moment = require('moment');


console.log("app firing");
var TodoApp = React.createClass({

	getInitialState: function(){
		return {
			showCompleted: false,
			searchText: "",
			todos: todoAPI.getTodos()
		}
	},

	componentDidUpdate: function(){
		console.log("component did update");
		todoAPI.setTodos(this.state.todos);
	},

	handleAddTodo: function(text){
		console.log(text);
		this.setState({
			todos: [
				...this.state.todos,
				{
					id: uuid(),
					todo: text,
					completed: false,
					createdAt: moment().unix(),
					completedAt: undefined
				}
			]
		});
	},

	handleSearch: function(showCompleted, searchText){
		this.setState({
			showCompleted: showCompleted,
			searchText: searchText.toLowerCase()
		})

	},

	
	render: function(){
		console.log("render firing");
		var {todos, showCompleted, searchText} = this.state;
		var filteredTodos = todoAPI.filterTodos(todos, showCompleted, searchText);
		return(
			<div>
				<h1 className = "page-title">Todo App</h1>
				<div className = "row">
					<div className = "column small-centered small-11 medium-6 large-5">
						<div className = "container">
							<Search onSearch = {this.handleSearch}/>
							<TodoList/>
							<AddTodo onAddTodo={this.handleAddTodo}/>
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