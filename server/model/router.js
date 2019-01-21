const db = require('./db.js');
const help = require('./help')

module.exports.todolist = function (req, res) {
	console.log('hahha')
	res.json({
		test: 'hello'
	})
}
module.exports.createlist = function (req, res) {
	console.log(req.body);
	db.insertOne('todo',req.body,function(err, results) {
		if (err) {
			help.respon(res);
		} else {
			help.respon(res,1, '添加成功')
		}
	})
}