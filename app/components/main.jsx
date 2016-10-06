//PARENT COMPONENT
import React, {Component} from 'react';
var Navbar = require("Navbar");

var Main = (props)=>{
	return (
		<div>
			<Navbar/>
			<div>
				<p>main.jsx rendered</p>
			</div>
			<div>
				{props.children}
			</div>		
		</div>
	);
}

module.exports = Main;
//export default Main;