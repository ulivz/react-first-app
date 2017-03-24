'use strict';

import React from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

class CommentBox extends React.Component{
  render() {
    return (
      <div className="ui comments">
        <h1>Comment</h1>
        <div className="ui divider"></div>
        <CommentList data={this.props.data}/>
        <CommentForm />
      </div>
    )
  }
}

export {CommentBox as default};
