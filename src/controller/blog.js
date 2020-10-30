//

let {exec} = require('../db/mysql')
// 博客列表
let getList = (author,keyword) =>{
    //假数据,真的格式
   let sql = `select * from blogs where 1=1 `
   if(author){
       sql += `and author = '${author}'`
   }
   if(keyword){
       sql +=` and title like '%${keyword}' `
   }
   return exec(sql)
}

//博客详情
let getDetail = (id) =>{
    return [
        {
            id:1,
            titile:'标题A',
            content:'内容A',
            createtime:1588129078935,
            author:'zhangsan'

        }
    ]
}

//新建博客
let newBlog = (blogData) =>{
    return {
        id:3  //表示新建博客，插入到数据库表里面的id
    }
}

//更新博客
let updateBlog = (id,blogData) =>{
    //id就是更新博客的id
    //blogData是一个博客对象，包含title content属性
    return true
}

//删除博客
let delBlog = (id) =>{
    //id 就是要删除博客的id
    return true
}

module.exports = {
    getList,getDetail,newBlog,updateBlog,delBlog
}