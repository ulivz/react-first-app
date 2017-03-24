'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/semantic-ui/dist/semantic.min.css'
import CommentBox from './comment/CommentBox';
import ROUTER from './routes/routes.js'

// CommentBox
// CommentList
// CommentList
// CommentForm

ReactDOM.render(
	<div>
		<CommentBox url="app/comments.json"/>
		{ROUTER}
	</div>,
	document.getElementById('app')
)
