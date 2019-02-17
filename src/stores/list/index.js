import React from 'react';
import {observable, action} from "mobx";
import CONTENTS from './contents';
import ajax from '@src/utils/ajax';

export default class Store {
	constructor() {
		this.init();
	}

	/**
	 * @props
	 * */
	@observable tableprops = CONTENTS.tableprops;


	/**
	 * @action
	 * */

	@action init = () => {
		this.fetchTabledata();
		this.tableprops.rowSelection.onChange = this.selectionChange;
		this.tableprops.pagination.onChange = this.pageChange;
		this.tableprops.columns.forEach(item => {
			if (item.key == 'operate') {
				item.render = (row) => {
					return(
							<a onClick={() => this.tabeldel(row)}>删除</a>
					)
				}
			}
		})
	}

	@action fetchTabledata = (page = 1,pageSize = 10) => {

		const searchdata = {
			page,
			pageSize
		}
		ajax({
			type: 'get',
			url: '/fetchtabledata',
			data: searchdata
		})
		.then(({data}) => {
			const realdata = data.data.data;
			realdata.forEach(item => {
				item.key = item._id
			})
			const total = data.data.total;
			const pagination = {
				total,
				current: page
			}
			this.tableprops.dataSource = realdata;
			this.tableprops.pagination = pagination

		})
		.catch(err => {
		})
	}

	@action selectionChange = (selectedRowKeys) => {
		console.log(selectedRowKeys)
	}

	@action pageChange = (page,pageSize) => {
		this.fetchTabledata(page,pageSize)
	}

	@action tabeldel = (row) => {
		// ajax({
		// 	type: 'get',
		// 	url: '/deltabledata',
		// 	data: {
		// 		_id: row._id
		// 	}
		// }).then(resp => {
		// 	console.log(resp)
		// })
	}
}