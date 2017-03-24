'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/semantic-ui/dist/semantic.min.css'
import CommentBox from './comment/CommentBox'


let comments = [
	{"author": "Chen Haoli", "date": "5 minutes ago", "text": "What heavenly weather!"},
	{"author": "Toxic HL", "date": "3 minutes ago", "text": "Let's go out!"}
]

// CommentBox
// CommentList
// CommentList
// CommentForm

ReactDOM.render(
  <CommentBox data={comments}/>,
  document.getElementById('app')
)
