import React from "react";
import {connect} from "react-redux";
import Todo from 'todo';
var todoAPI = require("todo_api");


export var TodoList = React.createClass({
	render: function(){
		var {todos, showCompleted, searchText} = this.props;
	
		
		var renderTodos = ()=>{
			var renderedTodos = todoAPI.filterTodos(todos, showCompleted, searchText);
			
			if(renderedTodos.length === 0){
				return(<p className = "container_message">Nothing to do.</p>);
			}
			return renderedTodos.map((todo)=>{
				return(
					<Todo key = {todo.id} {...todo}/>
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

export default connect(
	(state)=>{
		return state
	})(TodoList);

		
			//this will give the component todolist access to the props todos
			//instead of passing it through as an attribute from the parent
			//todos: state.todos
			//if you need access to everything just return state
			
	
		