'use strict';

import React from 'react';
import Comment from './Comment';

class CommentList extends React.Component {

	render() {

		console.log( this.props.data)
		let CommentNodes = this.props.data.map(comment => {
			return (
				<Comment auhot={comment.author} date={comment.date}>
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



