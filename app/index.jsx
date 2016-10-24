//ENTRY POINT FOR WEBPACK
import React from 'react';
import ReactDOM from 'react-dom';
import {hashHistory} from 'react-router';
import {Provider} from 'react-redux';
import firebase from 'app/firebase/';
import router from 'app/router/';
var actions = require('actions');
var store = require('configureStore').configure();


firebase.auth().onAuthStateChanged((user)=>{
	if(user){
		hashHistory.push('/todos')
	}else{
		hashHistory.push('/');
	}
});
//var TodoApp = require('todoapp.jsx');





store.dispatch(actions.startAddTodos());
//by default require does not know how to load css files so 
//you must use the css loader css! and then inject it using style!
//require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();
require('style!css!sass!applicationStyles');



ReactDOM.render(
	<div>
	<Provider store = {store}>
	{router}
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