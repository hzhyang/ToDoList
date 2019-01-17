const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const router = require('../model/router');

app.use(bodyparser.json());

app.all("*", function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'content-type')
	next();
});

app.get("/todolist",router.todolist);
app.get("/createlist",router.createlist);


app.listen(80, function () {
	console.log("start server success")
})