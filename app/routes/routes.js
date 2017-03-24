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
	<Router history={hashHistory}>
		<Route path="/shop" component={Shop}/>
		<Route path="/study" component={Study}/>
		<Route path="/video" component={Video}/>
	</Router>
)

export {ROUTER as default};