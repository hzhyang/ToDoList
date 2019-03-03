import React, { Component } from 'react';
import FormBuild from '@src/components/FormBuild';
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import { Table, Button, Modal } from 'antd';

import Store from '../../stores/list';
import './index.less';

@observer export default class List extends Component {
	constructor(props) {
		super(props);
		this.Store = new Store;
	}
	render() {
		return (
				<div className="List-wrap">
					<Table
						bordered={true}
						{...this.Store.tableprops}
					/>
					<div className="addButton-wrap">
						<Button type="primary">
							<Link to="create">
								<i className="iconfont icon-tianjia1" />
							</Link>
						</Button>
					</div>
					<Modal {...this.Store.ModalProps}>
						<FormBuild formProps={this.Store.formProps} />
					</Modal>
				</div>
		)
	}
}