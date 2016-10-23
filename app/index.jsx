//ENTRY POINT FOR WEBPACK
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import {Provider} from 'react-redux';
var TodoApp = require('todoapp');
var actions = require('actions');
var store = require('configureStore').configure();
var todoAPI = require("todo_api");



store.dispatch(actions.startAddTodos());
//by default require does not know how to load css files so 
//you must use the css loader css! and then inject it using style!
//require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();
require('style!css!sass!applicationStyles');

ReactDOM.render(
	<div>
	<Provider store = {store}>
		<TodoApp/>
	</Provider>
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