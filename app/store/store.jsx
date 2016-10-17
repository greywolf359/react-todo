var redux = require("redux");
var {searchTextReducer, showCompletedReducer, todoReducer} = require("reducers");

export var configure = ()=>{
	var reducer = redux.combineReducers({
		searchText: searchTextReducer,
		showCompleted: showCompletedReducer,
		todos: todoReducer
	});
	
	console.log(typeof reducer);
	var store = redux.createStore(reducer, redux.compose(
		window.devToolsExtension ? window.devToolsExtension : f => f
	));

	debugger;
	return store;
}