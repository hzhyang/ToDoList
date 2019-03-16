import { observable, action, toJS } from 'mobx';
import axios from 'axios';
import { message } from 'antd';
import common  from '@src/utils/common';
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
				item.innerConfig.onClick = this.submitButton; // 添加按钮回调
			}
		})
	}

	@action onFromChange = (fields) => {
		console.log(fields)
		this.formProps.items.forEach(item => {
			if (item.name == fields.name) {
				item.innerConfig.value = fields.value;
				console.log(item.innerConfig.value)
			}
		})
		console.log(this.formProps)
	}

	@action submitButton = () => {
		console.log(123)
		const data = {};
		console.log(this.formProps.items)
		this.formProps.items.forEach(item => {
			if (item.name !== 'todo_submit') {
				console.log(item)
				data[item.name] = item.innerConfig.value;
			}
		})
		let flag = true;
		console.log(data)
		for (var item in data) {
			console.log(data[item])
			if (item == 'todo_name') {
				console.log(item)
				if (data[item] == undefined || !data[item]) {
					message.error('事件名称不能为空');
					flag = false;
					break;
				}
			}
		}
		if (flag) {
			// console.log(baseurl)
			const { baseurl } = common;
			axios.post(baseurl+'/createlist',data).then(({ data }) => {
				if (data.ok) {
					common.pageGoto('/')
				}
			})
		}

	}

}

export default Store;
