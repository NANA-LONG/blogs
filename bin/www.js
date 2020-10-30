const http = require('http')

const serverHanle = require('../app')

const PORT = 3000

const server = http.createServer(serverHanle)

server.listen(PORT)