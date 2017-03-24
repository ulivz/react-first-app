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

		this.getComments();
		// setInterval(() => {
		// 	this.getComments()
		// }, 5000)

	}

	getComments() {
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


	handleCommentSubmit(comment) {
		let comments = this.state.data,
		newComments = comments.concat(comment);
		this.setState({data: newComments});
	}

	render() {
		return (
			<div className="ui comments">
				<h1 className="comment-title">Comment</h1>
				<div className="ui divider"></div>
				<CommentList data={this.state.data}/>
				<CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)}/>
			</div>
		)
	}
}

export {CommentBox as default};
