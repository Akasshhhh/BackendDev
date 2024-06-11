const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('The home server')
    }
    if(req.url === '/about'){
        res.end('The about page')
    }
})

server.listen(5000)