//ENTRY POINT FOR WEBPACK
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
//import Main from './components/main';
var Main = require('Main');
var Timer = require("Timer");
var Countdown = require("Countdown");


//by default require does not know how to load css files so 
//you must use the css loader css! and then inject it using style!
//require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();
require('style!css!sass!applicationStyles');

ReactDOM.render(
	<div>
	{/*Router maintains the routes in the url*/}
	<Router history = {hashHistory}>
		{/*this route is the main component the nested routes will render
		depending on which path is active. if there is no valid path,
		then IndexRoute will be the default page.
		*/}
		<Route path = "/" component={Main}>
			<Route path = "countdown" component={Countdown}/>
			<IndexRoute component={Timer}/>
		</Route>
	</Router>
	</div>, 
	document.getElementById("element")
);
