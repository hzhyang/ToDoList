添加接口：
  url: /createlist
  post 
  data{
    type,
    content,
    remask
  }
  respon {
    ok:1 
    msg: '添加成功'
  }
  
获取接口
    url: /fetchtabledata
    get
    respon {
    ok:1
    msg:'',
    data;
    }