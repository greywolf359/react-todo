var moment = require("moment");
var uuid = require("node-uuid");

export var searchTextReducer = (state, action)=>{
	console.log("searchreducer");

	switch(action.type){
		case 'SET_SEARCH_TEXT':
			return action.searchText;
		default: return state;
	}
}

export var showCompletedReducer = (state = false, action)=>{
	console.log("complete reducer");
	switch(action.type){
		case 'TOGGLE_SHOW_COMPLETED':
			return !state;
		default: return state;
	}
}

export var todoReducer = (state = [], action) =>{
	console.log("todo reducer");
	switch(action.type){
		case "ADD_TODO":
			return [
				...state,
				{
					id: uuid(),
					todo: action.todo,
					completed: false,
					createdAt: moment().unix(),
					completedAt: undefined
				}
			];	
		case 'TOGGLE_TODO':
			return state.map((todo)=>{
				if(todo.id === action.id){
					var nextCompleted = !todo.completed;
				}
				return {
					...todo,
					completed: nextCompleted,
					completedAt: nextCompleted ? moment().unix() : undefined
				};
			});
		default: return state;	


	}	
}