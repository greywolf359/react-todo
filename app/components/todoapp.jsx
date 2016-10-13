import React from 'react';
import uuid from 'node-uuid';
var TodoList = require("TodoList");
var Search = require("Search");
var AddTodo = require("AddTodo");


var TodoApp = React.createClass({

	getInitialState: function(){
		return {

			showCompleted: false,
			searchText: "",

			todos: [
				{
					id: uuid(),
					todo: "walk dog",
					completed: false
				},
				{
					id: uuid(),
					todo: "clean yard",
					completed: true
				},
				{
					id: uuid(),
					todo: "clean room",
					completed: true
				},
				{
					id: uuid(),
					todo: "take out garbage",
					completed: false
				},

			],
		}
	},

	handleAddTodo: function(text){
		console.log(text);
		this.setState({
			todos: [
				...this.state.todos,
				{
					id: uuid(),
					todo: text
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
			}
			return todo;
		})

		this.setState({todos: updated_todos});
	},

	render: function(){
		var {todos} = this.state;
		return(
			<div>
				<Search onSearch = {this.handleSearch}/>
				<TodoList todos = {todos} onToggle={this.handleToggle}/>
				<AddTodo onAddTodo={this.handleAddTodo}/>
			</div>
		)
	}
});

module.exports = TodoApp;