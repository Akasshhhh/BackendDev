const http = require('http')

const server = http.createServer((req,res)=>{
    console.log("hehe")
    //this is passing a header for our server
    res.writeHead(200,{'content-type':'text/html'})
    if(req.url === '/'){
        res.end('<h1>Home</h1>')
    }
})

server.listen(5000);