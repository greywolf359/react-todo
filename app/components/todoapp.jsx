import React from 'react';
var TodoList = require("TodoList");

var TodoApp = React.createClass({

	getInitialState: function(){
		return {
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

			]
		}
	},
	render: function(){
		var {todos} = this.state;
		return(
			<div>
				<TodoList todos = {todos}/>
			</div>
		)
	}
});

module.exports = TodoApp;