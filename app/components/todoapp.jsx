import React from 'react';
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
					id: 1,
					todo: "walk dog"
				},
				{
					id: 2,
					todo: "clean yard"
				},
				{
					id: 3,
					todo: "clean room"
				},
				{
					id: 4,
					todo: "take out garbage"
				},

			],
		}
	},

	handleAddTodo: function(text){
		alert(text);
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