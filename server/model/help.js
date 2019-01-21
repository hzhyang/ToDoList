module.exports.respon = function (res, ok = -1 ,msg = '错误啦请重试下吧') {
  res.json({
    ok,
    msg
  });
  return null;
}