import axios from 'axios';
import common from "@src/utils/common";

function ajax(obj) {
	const {baseurl} = common;
	let { type= 'get',url='xxx',data } = obj;
	if (type === "get" && data) {
		Object.keys(data).forEach((key, index) => {
			url += `${index === 0 ? "?" : "&"}${key}=${data[key]}`;
		});
		url = url;
	}
	return axios({
		method: type,
		url: baseurl + url,
		data
	});
}



export default ajax;
