'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/semantic-ui/dist/semantic.min.css'
import CommentBox from './comment/CommentBox'

// CommentBox
// CommentList
// CommentList
// CommentForm

ReactDOM.render(
  <CommentBox url="app/comments.json"/>,
  document.getElementById('app')
)
