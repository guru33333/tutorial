const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Hello Guru');
    }
    if(req.url === '/about'){
        res.end('This is Guru');
    }
   res.end(`
   <h1>OOPS</h1>`)
})
server.listen(5000)