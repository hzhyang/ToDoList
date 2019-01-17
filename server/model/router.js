


module.exports.todolist = function (req, res) {
	console.log('hahha')
	res.json({
		test: 'hello'
	})
}
module.exports.createlist = function (req, res) {
	console.log(req)
	res.json({
		code: 200,
		msg:'添加成功'
	})
}