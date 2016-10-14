import React from 'react';

var Search = React.createClass({

	handleSearch: function(){
		var show_completed = this.refs.show_completed.checked;
		var search_text = this.refs.search_text.value;
		this.props.onSearch(show_completed, search_text);
	},

	render: function(){
		return(
			<div className = "container_header">

			<div>
			<input type = 'text' ref = 'search_text' onChange={this.handleSearch} placeholder="Search todos"/>
			</div>

			<div>
				<label>
					<input type = "checkbox" ref = "show_completed" onChange={this.handleSearch}/>
					Show completed todos.
				</label>
			</div>
			</div>

		);
	}

});

module.exports = Search;