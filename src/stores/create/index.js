import { observable, action, toJS } from 'mobx';

import CONSTANT from './constant';
class Store {
	constructor() {
		this.init();
	}

	/**
	* @props
	* */
	@observable formProps = CONSTANT.formProps;


	/**@action
	 * */
	@action init = () => {
		this.formProps.onFieldsChange = this.onFromChange;
		this.formProps.items.forEach(item => {
			if (item.name === 'todo_submit') {
				item.innerConfig.onClick = this.submitButton;
			}
		})
	}

	@action onFromChange = (fields) => {
		this.formProps.items.forEach(item => {
			if (item.name == fields.name) {
				item.innerConfig.initialvalue = fields.value;
			}
		})
	}

	@action submitButton = () => {
		const data = {};
		this.formProps.items.forEach(item => {
			if (item.name !== 'todo_submit') {
				data[item.name] = item.innerConfig.initialvalue;
			}
		})
		console.log(data)
	}

}

export default Store;