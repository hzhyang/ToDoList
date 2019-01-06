import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import List from './list/index';
import Create from './create/index';
import Error from './error/index';

@observer export default class Content extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route path="/list" component={List} />
					<Route path="/create" component={Create} />
					<Route path="/*" component={Error} />
				</Switch>
			</Router>
		)
	}
}