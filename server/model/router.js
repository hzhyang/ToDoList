const db = require('./db.js');
const help = require('./help')

module.exports.todolist = function (req, res) {
	console.log('hahha')
	res.json({
		test: 'hello'
	})
}
module.exports.createlist = function (req, res) { // 添加
	if (Object.keys(req.body).length != 0) {
		const time = Date.now();
		const data = Object.assign({createdate: time},req.body, {isdone: false})
		db.insertOne('todo',data,function(err, results) {
			if (err) {
				help.respon(res);
			} else {
				help.respon(res,1, {msg:'添加成功'})
			}
		})
	} else {
		help.respon(res,0,{msg: '参数错误'})
	}

}

module.exports.fetchtabledata = function (req, res) {
	console.log(req.query);
	const { page,pageSize } = req.query;
	let total = 0;
	const limit = pageSize * 1;
	const skip = page == 1 ? 0 : (page-1) * pageSize;
	db.count('todo',{},function(resp) {
		console.log(resp);
		total = resp
	})
	db.find('todo', {sort: { createdate: -1},limit,skip},function(err,resp) {
		if (err) {
			console.log(err)
			help.respon(res);
		} else {
			console.log(resp)
			help.respon(res,1,{data:resp,total})
		}
	})
}

module.exports.deltabledata = function (req, res) {
	console.log(req.body);
	db.deltone('todo',req.body._id,function(err){
		if (err)
			console.log(err);
		else
			help.respon(res,1)
	})
}