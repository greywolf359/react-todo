var $ = require("jquery");

module.exports = {

	setTodos: function(todos){
		if ($.isArray(todos)){
			localStorage.setItem('todos', JSON.stringify(todos));
		}
		return todos;
	},

	getTodos: function(){
		var string_todos = localStorage.getItem('todos');
		var todos = [];

		try{
			todos = JSON.parse(string_todos);
		}catch(e){

		}

		return $.isArray(todos)? todos:[];
	},

	filterTodos: function(todos, showCompleted, searchText){
		var filteredTodos = todos;
		//filter by show completed
		filteredTodos = filteredTodos.filter((todo)=>{
			return !todo.completed || showCompleted;
		})
		//filter by searchtext
		filteredTodos = filteredTodos.filter((todo)=>{
			if(todo.todo.indexOf(searchText.toLowerCase()) !== -1){
				return todo;
			}
		})
		//sort todos with noncompleted first
		filteredTodos.sort((a,b)=>{
			if(!a.completed && b.completed){
				return -1;
			}else if(a.completed && !b.completed){
				return 1;
			}else{
				return 0;
			}
		})
		return filteredTodos;
	}

};