import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'

import Shop from '../components/Shop';
import Study from '../components/Study';
import Video from '../components/Video';

let ROUTER = (
	<Router>
		<div>
			<Route path="/shop" component={Shop}/>
			<Route path="/study" component={Study}/>
			<Route path="/video" component={Video}/>
			<div>
				<div style={{'cursor':'pointer'}}><Link to="/shop"/>Shop</div>
				<div style={{'cursor':'pointer'}}><Link to="/study"/>Study</div>
				<div style={{'cursor':'pointer'}}><Link to="/video"/>Video</div>
			</div>
		</div>
	</Router>
)

export {ROUTER as default};