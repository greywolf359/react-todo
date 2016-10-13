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
					todo: "walk dog"
				},
				{
					id: uuid(),
					todo: "clean yard"
				},
				{
					id: uuid(),
					todo: "clean room"
				},
				{
					id: uuid(),
					todo: "take out garbage"
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

	render: function(){
		var {todos} = this.state;
		return(
			<div>
				<Search onSearch = {this.handleSearch}/>
				<TodoList todos = {todos}/>
				<AddTodo onAddTodo={this.handleAddTodo}/>
			</div>
		)
	}
});

module.exports = TodoApp;