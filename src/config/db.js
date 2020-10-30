const env = process.env.NODE_ENV
console.log(env)
let MYSQL_CONF
//开发环境 线下
if(env === 'dev'){
    MYSQL_CONF = {
            host: 'localhost',
            user: 'root',
            password: '123456',
            port: 3306,
            database: 'myblog'
        }   
}
//生产环境 线上
if(env === 'production'){
        MYSQL_CONF = {
                host: 'localhost',
                user: 'root',
                password: '123456',
                port: 3306,
                database: 'infos'
        }   
    }
    
    module.exports = MYSQL_CONF