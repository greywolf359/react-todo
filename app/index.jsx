//ENTRY POINT FOR WEBPACK
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
//import Main from './components/main';
var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(()=>{
	console.log("new state", store.getState());
});

store.dispatch(actions.addTodo("walk the dog"));

store.dispatch(actions.setSearchText("yard"));
store.dispatch(actions.toggleShowCompleted());



//by default require does not know how to load css files so 
//you must use the css loader css! and then inject it using style!
//require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();
require('style!css!sass!applicationStyles');

ReactDOM.render(
	<div>
	<TodoApp/>
	</div>, 
	document.getElementById("element")
);

/*
this route is the main component the nested routes will render
depending on which path is active. if there is no valid path,
then IndexRoute will be the default page.
*/
/*Router maintains the routes in the url*/

/*
	<Router history = {hashHistory}>
		
		<Route path = "/" component={Main}> <------Parent route
			<Route path = "countdown" component={Countdown}/>
			<IndexRoute component={Timer}/><---default route
		</Route>
	</Router>
*/