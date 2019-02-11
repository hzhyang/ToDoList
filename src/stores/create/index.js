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
		console.log(data,222)
		let flag = true;
		for (var item in data) {
			if (item == 'todo_name') {
				console.log(111)
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
				console.log(data)
				if (data.ok) {
					common.pageGoto('/')
				}
			})
		}

	}

}

export default Store;