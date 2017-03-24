'use strict';

import React from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import 'whatwg-fetch';

class CommentBox extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			data: []
		}

		fetch(this.props.url)
			.then(response => {
				return response.json()
			}, err => {
				console.log(err)
			})
			.then(json => {
				this.setState({data: json})
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
