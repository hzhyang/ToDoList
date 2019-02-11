import history from '@src/router/history';

export default {
	baseurl: 'http://127.0.0.1',
	gettime: (ms) => {
		const date = new Date(ms);
		const year = date.getFullYear();
		const month = date.getMonth()+1;
		const day = date.getDate();
		const datastr = ms ? `${year}-${month}-${day}` : '';
		return datastr;
	},
	pageGoto: (router) => {
		console.log(history)
		history.push({
			pathname: router
		})
	}
}
