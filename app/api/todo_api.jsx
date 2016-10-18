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
		//filter by show completed - return the todo only if todo.completed is true
		//or showCompleted is true
		filteredTodos = filteredTodos.filter((todo)=>{
			return !todo.completed || showCompleted;
		})

		console.log('filteredTodos after showcomplete', filteredTodos);
		//filter by searchtext - filter only if indexof = -1
		filteredTodos = filteredTodos.filter((todos)=>{
			var text = todos.todo.toLowerCase();
			return searchText.length === 0 || text.indexOf(searchText.toLowerCase()) > -1;
			//if(todo.todo.indexOf(searchText.toLowerCase()) !== -1){
				//return todo;
			//}
		})
		console.log('filteredTodos after searchtext', filteredTodos);
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
		console.log('filteredTodos after noncom first: ', filteredTodos);
		return filteredTodos;
	}

};