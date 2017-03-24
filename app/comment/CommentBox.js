'use strict';

import React from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

class CommentBox extends React.Component{
  render() {
    return (
      <div className="ui comments">
        <h1>评论</h1>
        <div className="ui divider"></div>
        <CommentForm />
        <CommentList data={this.props.data}/>
      </div>
    )
  }
}

export {CommentBox as default};
