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
				item.innerConfig.onClick = this.submit; // 添加按钮回调
			}
		})
	}

	@action onFromChange = (fields) => {
		this.formProps.items.forEach(item => {
			if (item.name == fields.name) {
				item.innerConfig.innervalue = fields.value;
			}
		})
	}

	@action submit = () => {
		const data = {};
		this.formProps.items.forEach(item => {
			if (item.name !== 'todo_submit') {
				data[item.name] = item.innerConfig.innervalue;
			}
		})
		let flag = true;
		for (var item in data) {
			if (item == 'todo_name') {
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
