import React, { Component } from 'react';
import { observer } from "mobx-react";
import FormBuild from '@src/components/FormBuild';

import Store from '@src/stores/create';

@observer export default class Contents extends Component{
	constructor() {
		super();
		this.Store = new Store();
	}
	render() {
		const {
			formProps
		} = this.Store;
		return (
			<div>
			<FormBuild formProps={formProps} />
			</div>
		);
	}
}
