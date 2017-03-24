'use strict';

import React from 'react';

class CommentList extends React.Component {

	render() {
		return (
			<form className="ui reply form">
				<div className="field"><input type="text"/></div>
				<div className="filed textarea"></div>
				<button type="submit"></button>
			</form>
		)
	}
}

export {CommentList as default};
