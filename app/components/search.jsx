import React from 'react';
import {connect} from 'react-redux';
var actions = require('actions');

export var Search = React.createClass({
	render: function(){
		var {dispatch, showCompleted, searchText} = this.props;
		return(
			<div className = "container_header">

			<div>
			<input type = 'text' 
			ref = 'search_text'  
			value = {searchText} 
			placeholder="Search todos"
			 onChange={()=>{
			 	var searchText = this.refs.search_text.value;
			 	dispatch(actions.setSearchText(searchText))
			 }}
			/>
			</div>

			<div>
				<label>
					<input type = "checkbox" 
					ref = "show_completed" 
					checked = {showCompleted}
					onChange={()=>{
						dispatch(actions.toggleShowCompleted())
					}
					}/>
					Show completed todos.
				</label>
			</div>
			</div>

		);
	}

});

export default connect(
	(state)=>{
		return {
			showCompleted: state.showCompleted,
			searchText: state.searchText
		}
	}
)(Search);