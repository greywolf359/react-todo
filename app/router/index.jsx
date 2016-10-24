import React from 'react';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import firebase from 'app/firebase';
import TodoApp from 'todoapp';
import Login from "login";

//checks to see if user is logged in or not, if not it send them to login
var requireLogin = (nextState, replace, next)=>{
	if(!firebase.auth().currentUser){
		replace('/');
	}
	next();
}

//if the user is logged in, it will send them to todos page
var redirectIfLoggedIn = (nextState, replace, next)=>{
	if(firebase.auth().currentUser){
		replace('/todos');
	}
	next();
}

export default(
<Router history = {hashHistory}>
		<Route path = "/">
			<Route path = "todos" component = {TodoApp} onEnter={requireLogin}/>
			<IndexRoute component = {Login} onEnter={redirectIfLoggedIn}/>
		</Route>
	</Router>
)