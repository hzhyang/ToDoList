import React, { Component } from 'react';
import { observer } from 'mobx-react';
import history from '@src/router/history';
import { Route, Router, Switch } from 'react-router-dom'; // 这里可以直接使用Router 不用使用BrowserRouter

import List from './list/index';
import Create from './create/index';
import Error from './error/index';

@observer export default class Content extends Component {
	render() {
		return (
			<Router history = { history }>
				<Switch>
					<Route exact path="/" component={List} />
					<Route path="/create" component={Create} />
					<Route path="/*" component={Error} />
				</Switch>
			</Router>
		)
	}
}