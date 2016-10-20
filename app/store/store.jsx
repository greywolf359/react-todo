import thunk from 'redux-thunk';
import * as redux from 'redux';
var {searchTextReducer, showCompletedReducer, todoReducer} = require("reducers");

export var configure = (initialState = {})=>{
	var reducer = redux.combineReducers({
		searchText: searchTextReducer,
		showCompleted: showCompletedReducer,
		todos: todoReducer
	});
	
	var store = redux.createStore(reducer, initialState, redux.compose(
		redux.applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	));

	return store;
}