import React from "react";
import ReactDOM from 'react-dom';
import * as redux from 'react-redux';
import * as actions from 'actions';

export var Login = React.createClass({
	onLogin: function(){
		var {dispatch} = this.props;
		dispatch(actions.startLogin());
	},
	render: function(){
		return(
			<div>
				<h1 className = "page-title">Todo App</h1>
				<div className = "row">
					<div className = "columns small-centered small-10 medium-6 large-4">
						<div className = "callout">
							<h3>Login</h3>
							<p>Login with github account below</p>
							<button className="button" onClick={this.onLogin}>Login With Github</button>
						</div>
					</div>

				</div>
			</div>
		)
	}
});

export default redux.connect()(Login);