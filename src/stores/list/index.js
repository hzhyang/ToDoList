import React from 'react';
import {observable, action, toJS} from "mobx";
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
	@observable ModalProps = CONTENTS.ModalProps;
	@observable formProps = CONTENTS.formProps;


	/**
	 * @action
	 * */

	@action init = () => {
		this.fetchTabledata();
		this.formProps.onFieldsChange = this.formChange;
		this.ModalProps.onOk=this.handleOk;
		this.ModalProps.onCancel=this.handleCancel;
		this.tableprops.pagination.onChange = this.pageChange;
		this.tableprops.columns.forEach(item => {
			if (item.key == 'operate') {
				item.render = (row) => {
					return(
							<div>
								<a onClick={() => this.tabeledit(row)}>修改</a>
								<span className="operate_span"></span>
								<a onClick={() => this.tabeldel(row)}>删除</a>
							</div>
					)
				}
			} else if(item.key == 'checkbox'){
				item.render = (text,row) => {
					return (
							<div className="checkbox-wrap">
								<input type="checkbox" onClick={() =>this.selectionChange(row)} className="checkbox"/>
							</div>
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
				current: data.data.current/1
			}
			this.tableprops.dataSource = realdata;
			this.tableprops.pagination = pagination

		})
		.catch(err => {
		})
	}

	@action selectionChange = (row) => {
		ajax({
			type: 'post',
			url: '/checkedtabledata',
			data: {
				_id: row._id
			}
		}).then(resp => {
			if(resp.data.ok == 1) {
				this.fetchTabledata(this.tableprops.pagination.current)
			}
		})
	}

	@action pageChange = (page,pageSize) => {
		this.fetchTabledata(page,pageSize)
	}

	@action tabeldel = (row) => {
		ajax({
			type: 'post',
			url: '/deltabledata',
			data: {
				_id: row._id
			}
		}).then(resp => {
			if(resp.data.ok == 1) {
				this.fetchTabledata(this.tableprops.pagination.current)
			}
		})
	}

	@action tabeledit = (row) => {
		this.ModalProps.title = `修改(${row.todo_name})`;
		const _formProps = this.formProps;
		_formProps.items.forEach( item => {
			item.innerConfig.value = row[item.name]
		})
		this.formProps = toJS(_formProps);
		this.ModalProps.visible = true;
	}

	@action handleOk = () => {

	}
	@action handleCancel = ()=> {
		this.ModalProps.visible = false;
	}

	@action formChange = () => {
    this.formProps.items.forEach(item => {
      if (item.name == fields.name) {
        item.innerConfig.value = fields.value;
        console.log(item.innerConfig.value)
      }
    })
	}
}