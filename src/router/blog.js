const {SuccessModel,ErrorModel} = require('../model/resModel')
const {getList,getDetail,newBlog,updateBlog,delBlog} = require('../controller/blog')

let handleBlogRouter = (req,res) =>{
    let {id} = req.query

    //获取博客列表
    if(req.method == 'GET' && req.path === '/api/blog/list'){
        // let {author,keyword} = req.query
        let author = req.require.author || ''
        let keyword = req.query.keyword || ''
        let Result = getList(author,keyword)//exec(sql)
        return Result.then((listData) =>{
            return new SuccessModel(listData)  
        }).then((data) =>{
            
        })
        // return new SuccessModel(listData)
    }

    //获取博客详情
    if(req.method === 'GET' && req.path === '/api/blog/detail'){
        let detailData = getDetail(id)
        return new SuccessModel(detailData)
    }

    //新增一篇博客
    if(req.method === 'POST' && req.path === '/api/blog/new'){
        let data = newBlog(req.body)
        return new SuccessModel(data)
    }

    //更新一篇博客
    if(req.method === 'POST' && req.path === '/api/blog/update'){
        let result = updateBlog(id,req.body)
        if(result){
            return new SuccessModel('博客更新成功')
        }else{
            return new ErrorModel('博客更新失败')
        }
    }

    //删除一篇博客
    if(req.method === 'POST' && req.path === '/api/blog/del'){
        let result = delBlog(id)
        if(result){
            return new SuccessModel('博客删除成功')
        }else{
            return new SuccessModel('博客删除失败')
        }
    }
}

module.exports = handleBlogRouter