module.exports.respon = function (res, ok = 0 ,data = {}) {
  if (ok == 0) {
    data.msg = '错误啦请重试下吧'
  }
  res.json({
    ok,
    data
  });
  return null;
}