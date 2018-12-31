import React,{ Component } from 'react';

import './index.less'

export default class HeaderTop extends Component{
	render() {
		return (
			<div className="headertop-wrap">
				<div className="headertopleft">LOGO</div>
				<div className="headertopcenter">头部</div>
				<div className="headertopright">ACCOUNT</div>
			</div>
		);
	}
}