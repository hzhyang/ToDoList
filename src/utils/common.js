import history from '@src/router/history';

export default {
	// baseurl: 'http://www.ifelsefi.com:1888',
	baseurl: 'http://127.0.0.1:8888',
	gettime: (ms) => {
		const date = new Date(ms);
		const year = date.getFullYear();
		const month = date.getMonth()+1;
		const day = date.getDate();
		const datastr = ms ? `${year}-${month}-${day}` : '';
		return datastr;
	},
	pageGoto: (router) => {
		history.push({
			pathname: router
		})
	}
}
