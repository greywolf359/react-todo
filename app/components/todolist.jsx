import React from "react";
import {connect} from "react-redux";
import Todo from 'todo';


export var TodoList = React.createClass({

	
	render: function(){
		var {todos} = this.props;



		var renderTodos = ()=>{
			if(todos.length === 0){
					return(<p className = "container_message">Nothing to do.</p>);
				}
			return todos.map((todo)=>{
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
		return{
			//this will give the component todolist access to the props todos
			//instead of passing it through as an attribute from the parent
			todos: state.todos
		}
	}
	)(TodoList);