'use strict';

import React from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import fetch from 'fetch';

class CommentBox extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			data: []
		}

		fetch(this.props.url)
			.then(function (response) {
				console.log(response)
			})
	}

	render() {
		return (
			<div className="ui comments">
				<h1>Comment</h1>
				<div className="ui divider"></div>
				<CommentList data={this.state.data}/>
				<CommentForm />
			</div>
		)
	}
}

export {CommentBox as default};
