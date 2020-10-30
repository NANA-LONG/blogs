const querystring = require('querystring')
const handleBlogRouter = require('./src/router/blog')
const handleuserRouter = require('./src/router/user')

let serverHanle = (req,res) =>{

        req.path = req.url.split('?')[0]  //接口
        
        //解析query
        req.query = querystring.parse(req.url.split('?')[1]) //url数据

        //解析postData
        function getPostData(req){
            return new Promise((resolve,reject) =>{
               if(req.method != 'POST'){
                    resolve({})
                    return
               }

                let postData = ''
                req.on('data',chunk =>{
                    console.log(1111)
                    postData += chunk.toString()
                })
        
                req.on('end',() =>{
                    if(!postData){
                        resolve({})
                        return
                    }
                    resolve(JSON.parse(postData))
                })
            })
        }

        getPostData(req).then((postData)=>{

              req.body = postData

              //1、处理blog路由
              let blogData = handleBlogRouter(req,res)
              if(blogData){
                  res.end(JSON.stringify(blogData))
                  return
              }

              //2、处理user路由
              let userData = handleuserRouter(req,res)
              if(userData) {
                res.end(JSON.stringify(userData))
                return
              }

              //3、未命中路由
              res.writeHeader(404,{"Content-type":"text/plain"})
              res.end('404 Not Found')
          })

}

module.exports = serverHanle