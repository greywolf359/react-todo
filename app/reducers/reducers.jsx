var moment = require("moment");
var uuid = require("node-uuid");

/*
export var searchTextReducer = (state = '', action)=>{
	console.log("searchreducer", state);


	switch(action.type){
		case 'SET_SEARCH_TEXT':
			return action.searchText;
		default: return state;
	}
	
}
*/

export var searchTextReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText;
    default:
      return state;
  };
};
export var showCompletedReducer = (state = false, action)=>{
	switch(action.type){
		case 'TOGGLE_SHOW_COMPLETED':
			return !state;
		default: return state;
	}
}

//when you use one spread operator after another, everything in the second
//will override any that are in the first one, props that arent in one but in the other
//will still be around
export var todoReducer = (state = [], action) =>{
	switch(action.type){
		case "ADD_TODO":
			return [
				...state,
				action.todo
			];	
		case 'UPDATE_TODO':
			return state.map((todo)=>{
				if(todo.id === action.id){
					
					return {
						...todo,
						...action.updates//received from action, contains completed flag and completed time
					};
				}else{
					return todo;
				}
			});
		case 'ADD_TODOS':
			return[
				...state,
				...action.todos
			]
		default: return state;	
	}	
}

 export var authReducer = function(state = {}, action){
 	switch(action.type){
 		case 'LOGIN':
 		return{
 			uid: action.uid
 		}
 		case 'LOGOUT':
 		return {}
 	
 		default: return state;
 	}
 }