import React, { Component } from 'react';
import { observer } from "mobx-react";
import { Table } from 'antd';

import Store from '../../stores/list';
import './index.less';

@observer export default class List extends Component {
	constructor(props) {
		super(props);
		this.Store = new Store;
	}
	render() {
		const {
			dataSource,
				columns
		} = this.Store.tableprops;
		return (
				<div className="List-wrap">
					<Table
						bordered={true}
						columns={columns}
						dataSource={dataSource}
					/>
				</div>
		)
	}
}