import React, { Component } from 'react';

import HeaderTop  from 'Components/headerTop'
import Content from './page/index';
 export default class Main extends Component{
	render() {
		return(
			<div>
				<HeaderTop></HeaderTop>
				<Content></Content>
			</div>
		)
	}
}
