const mongod  = require('mongodb');
const help  = require('./help.js');
const mongo = require('mongodb');
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

module.exports.count = function (collect,obj,cb,) {
  var where={};
  if(obj){
      where=obj
  }
  _connect(function (mydb) {
    mydb.collection(collect).countDocuments(where).then(cb);
  })
};
module.exports.insertOne = function ( collect,contentobj,cb) {
  _connect(function(mydb){
    mydb.collection(collect).insertOne(contentobj,cb)
  })
};

module.exports.find = function (collect, obj, cb) {
  _connect(function (mydb){
    obj.where = obj.where ? obj.where : {};
    obj.sort = obj.sort ? obj.sort : {};
    obj.limit = obj.limit ? obj.limit : 0;
    obj.skip = obj.skip ? obj.skip : 0;
    mydb.collection(collect).find(obj.where).sort(obj.sort).limit(obj.limit).skip(obj.skip).toArray(cb);
  })
}

module.exports.deltone = function (collect,id,cb) {
  _connect(function (mydb) {
    mydb.collection(collect).deleteOne({
      _id: mongo.ObjectId(id)
    },cb)
  })
}