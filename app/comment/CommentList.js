'use strict';

import React from 'react';
import Comment from './Comment';

class CommentList extends React.Component {

	render() {
		let CommentNodes = this.props.data.map((comment, index) => {
			return (
				<Comment key={index} author={comment.author} date={comment.date}>
					{comment.text}
				</Comment>
			);
		});

		return (
			<div>
				{CommentNodes}
			</div>
		)

	}

}

export {CommentList as default};



