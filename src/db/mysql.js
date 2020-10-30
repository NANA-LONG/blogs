//第三方模块
let mysql = require('mysql')
//自定义模块
let  MYSQL_CONF = require('../config/db')
//创建链接
let con = mysql.createConnection(MYSQL_CONF)
//开始链接
con.connect()
function exec(sql){
    return new Promise(sql,(err,result) =>{
        if(err){
            PromiseRejectionEvent(err)
            return
        }
        resolve(result);
    })
}