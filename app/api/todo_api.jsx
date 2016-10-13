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
	}

};