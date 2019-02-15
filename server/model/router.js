const db = require('./db.js');
const help = require('./help')

module.exports.todolist = function (req, res) {
	console.log('hahha')
	res.json({
		test: 'hello'
	})
}
module.exports.createlist = function (req, res) { // 添加
	console.log(req.body,typeof req.body,2222);
	if (Object.keys(req.body).length != 0) {
		const time = Date.now();
		const data = Object.assign({createdate: time},req.body)
		db.insertOne('todo',data,function(err, results) {
			if (err) {
				help.respon(res);
			} else {
				help.respon(res,1, '添加成功')
			}
		})
	} else {
		help.respon(res,0,'参数错误')
	}

}

module.exports.fetchtabledata = function (req, res) {
	console.log(req.query);

	db.find('todo', {sort: { createdate: -1}},function(err,resp) {
		if (err) {
			console.log(err)
			help.respon(res);
		} else {
			console.log(resp)
			help.respon(res,1,resp)
		}
	})
}