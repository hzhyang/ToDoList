const mongod  = require('mongodb');
const help  = require('./help.js');
var mongoClient = mongod.MongoClient;

function _connect(cb) {
  mongoClient.connect('mongodb://127.0.0.1:27017' ,{useNewUrlParser: true},function(err,client) {
    if (err) {
      console.log('connect error!',err)
    } else {
      var db = client.db('todolist');
      cb(db)
    }
  })
};

module.exports.insertOne = function ( collect,contentobj,cb) {
  _connect(function(mydb){
    mydb.collection(collect).insertOne(contentobj,cb)
  })
};