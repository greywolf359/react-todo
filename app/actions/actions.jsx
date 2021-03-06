import firebase, {firebaseRef, githubProvider} from 'app/firebase';
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

//any todos in local storage are added here
export var addTodos = (todos)=>{
	return{
		type: 'ADD_TODOS',
		todos
	}
}

//load any data in firebase upon app loading
//id key to id prop, object.keys()
export var startAddTodos = ()=>{
	return(dispatch, getState)=>{
		console.log("startaddtodos....");
		try{var uid = getState().auth.uid;}catch(e){console.log(e);}
		
		console.log("uid......", uid);
		var todosRef = firebaseRef.child(`users/${uid}/todos`);

		todosRef.once('value', (snapshot)=>{
		
		var todos = snapshot.val() || {};
		var parsedTodos = [];
		var keys = Object.keys(todos);
		
		
		keys.forEach((todoId) =>{
			parsedTodos.push({
				id: todoId,
				...todos[todoId]
			})
		});
		
		
		dispatch(addTodos(parsedTodos));
		
		}, (e)=>{
			console.log("error", e);
		});

		
	}
}

//called from addtodo, is input value is passed in and then it gets put
//into an object, which is then passed to firebase, and then the app
//is updated, along with the firebase key for said object
export var startAddTodo = (todo)=>{

	return (dispatch, getState) =>{
		var todo_obj = {
					todo,
					completed: false,
					createdAt: moment().unix(),
					completedAt: null
				}
		var uid = getState().auth.uid;
		var todoRef = firebaseRef.child(`users/${uid}/todos`).push(todo_obj);
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

//called from startToggleTodo
export var updateTodo = (id, updates)=>{
	return {
		type: 'UPDATE_TODO',
		id,
		updates //contains completed flag and completed at time, passed to store
	}
}

//called from todo.jsx - updates completed bool flag and completedAt time
//updates firebase then updates the state
export var startToggleTodo = (id, completed)=>{
	return (dispatch, getState)=>{
		var uid = getState().auth.uid;
		var todoRef = firebaseRef.child(`users/${uid}/todos/${id}`);
		var updates = {
			completed,
			completedAt: completed ? moment().unix(): null
		}

		todoRef.update(updates).then(()=>{
			dispatch(updateTodo(id, updates));
		});
	}
}

//called from login.jsx
export var startLogin = ()=>{
	return (dispatch, getState)=>{
		firebase.auth().signInWithPopup(githubProvider).then(
			(result)=>{
				console.log("auth worked", result);
			},
			(error)=>{
				console.log("auth failed", error);
			});
	}
}

export var startLogout = ()=>{
	return (dispatch, getState)=>{
		return firebase.auth().signOut().then(()=>{
			console.log("logged out");
		}, 
		(error)=>{
			console.log("error", error);
		})

	}
}

export var login = (uid)=>{
	return{
		type: 'LOGIN',
		uid	
	}
}

export var logout = ()=>{
	return {
		type: 'LOGOUT'
	}
}


