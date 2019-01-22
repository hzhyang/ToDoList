import { observable, action } from "mobx";
import axios from 'axios';
import CONTENTS from './contents';
import common from '@src/utils/common';

export default class Store {
	constructor(){
		this.init();
	}

	/**
	 * @props
	* */
	@observable tableprops = CONTENTS.tableprops


	/**
	 * @action
	 * */

	@action init = () => {
		console.log(common)
		this.fetchTabledata();
	}

	@action fetchTabledata = () => {
		const { baseurl } = common;
		axios.get(`${baseurl}/fetchtabledata`)
				.then(({data}) => {
					console.log(data);
					const realdata = data.msg;
					realdata.forEach(item => {
						item.key = item._id
					})
					this.tableprops.dataSource = realdata;

				})
				.catch(err => {
					console.log(err);
				})
	}
}