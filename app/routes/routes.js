import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'

import Shop from '../components/Shop';
import Study from '../components/Study';
import Video from '../components/Video';

class MyRouter extends React.Component {

	render() {

		return (
			<Router>
				<div>
					<div>
						<div style={{'cursor':'pointer'}}><Link to="/shop">Shop</Link></div>
						<div style={{'cursor':'pointer'}}><Link to="/study">Study</Link></div>
						<div style={{'cursor':'pointer'}}><Link to="/video">Video</Link></div>
					</div>
					<Route exact path="/" component={Shop}/>
					<Route path="/shop" component={Shop}/>
					<Route path="/study" component={Study}/>
					<Route path="/video" component={Video}/>
				</div>
			</Router>
		)
	}

}

export {MyRouter as default};