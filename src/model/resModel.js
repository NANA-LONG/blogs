//es6  class  ：封装、继承、多态
//父类
class BaseModel {
    constructor(data,message){
        if(typeof data === String){
            this.message = data
            data = null
            message = null
        }

        if(data){
            this.data = data
        }

        if(message){
            this.message = message
        }
    }
}

class SuccessModel extends BaseModel {
    constructor(data,message){
        super(data,message)
        this.errno = 0
    }
}

class ErrorModel extends BaseModel {
    constructor(data,message){
        super(data,message)
        this.errno = 1
    }
}

module.exports = {SuccessModel,ErrorModel}
