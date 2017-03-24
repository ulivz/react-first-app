'use strict';

import React from 'react';
import Comment from './Comment';

class CommentList extends React.Component {

	render() {
		return (
			<div>
				<Comment author="Toxichl" date="5 分钟前">天气不错啊</Comment>
				<Comment author="Chen Haoli" date="5 分钟前">出去玩啊</Comment>
			</div>
		)
	}

}

export { CommentList as default };



