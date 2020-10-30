let { login } = require('../controller/user')
const {SuccessModel,ErrorModel} = require('../model/resModel')

let hanleUserRouter = (req,res) =>{

    if(req.method === 'POST' && req.path === '/api/user/login'){

        let {username,password} = req.body

        const result = login(username,password)

        if(result){
            return new SuccessModel('登录成功')
        }else{
            return new ErrorModel('登录失败')
        }
    }
}

module.exports = hanleUserRouter