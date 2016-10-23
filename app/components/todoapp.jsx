import React from 'react';
import * as redux from 'react-redux';
import TodoList from 'todolist';
import Search from 'search';
import AddTodo from 'addTodo';
import * as actions from 'actions';



console.log("app firing");
export var TodoApp = React.createClass({
	onLogout: function(e){
		e.preventDefault();
		var {dispatch} = this.props;
		dispatch(actions.startLogout());
	},

	render: function(){
		return(
			<div>
				<div className="page-actions">
					<a href = "#" onClick = {this.onLogout}>
						Logout
					</a>
				</div>
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

export default redux.connect()(TodoApp);


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