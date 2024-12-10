const { log } = require("console")
const http=require("http")
http.createServer((req,res)=>{
    if(req.url==='/about'){
        res.write("hhh")
        res.end()
    }
    else if(req.url==='/ab'){
        res.write("hhh")
        res.end()
    }
    
}).listen(4000,()=>{console.log("running");
})