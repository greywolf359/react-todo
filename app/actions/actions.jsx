import firebase, {firebaseRef} from 'app/firebase';
import moment from 'moment';

export var setSearchText = (searchText)=>{
	return {
		type: 'SET_SEARCH_TEXT',
		searchText
	}
}

export var addTodo = (todo)=>{
	return {
		type: 'ADD_TODO',
		todo
	}
}

export var addTodos = (todos)=>{
	return{
		type: 'ADD_TODOS',
		todos
	}
}

export var startAddTodo = (todo)=>{//called from addtodo

	return (dispatch, getState) =>{
		var todo_obj = {
					todo,
					completed: false,
					createdAt: moment().unix(),
					completedAt: null
				}
		var todoRef = firebaseRef.child('todos').push(todo_obj);
		return todoRef.then(()=>{
			dispatch(addTodo({
				...todo_obj,
				id: todoRef.key
			}));
		});
	}
}

export var toggleShowCompleted = ()=>{
	return {
		type: 'TOGGLE_SHOW_COMPLETED'
	}

}

export var toggleTodo = (id)=>{
	return {
		type: 'TOGGLE_TODO',
		id
	}
}

