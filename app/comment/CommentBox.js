'use strict';

import React from 'react';

class CommentBox extends React.Component{
  render() {
    return (
      <div className="ui comments">
        <h1>评论</h1>
        <div className="ui divider"></div>
      </div>
    )
  }
}

export {CommentBox as default};
