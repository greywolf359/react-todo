import React from 'react';
import uuid from 'node-uuid';
var TodoList = require("TodoList");
var Search = require("Search");
var AddTodo = require("AddTodo");
var todoAPI = require("todo_api");
var moment = require('moment');



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

	render: function(){
		var {todos, showCompleted, searchText} = this.state;
		var filteredTodos = todoAPI.filterTodos(todos, showCompleted, searchText);
		return(
			<div>
				<h1 className = "page-title">Todo App</h1>
				<div className = "row">
					<div className = "column small-centered small-11 medium-6 large-5">
						<div className = "container">
							<Search onSearch = {this.handleSearch}/>
							<TodoList todos = {filteredTodos} onToggle={this.handleToggle}/>
							<AddTodo onAddTodo={this.handleAddTodo}/>
						</div>
					</div>
				</div>
			</div>
		)
	}
});


