
const http=require("node:http")
const fs=require("fs")
const { error } = require("node:console")
const os=require('os')
const cpu=os.cpus()



const server=http.createServer(handler)

//callback function(requesthandler) passed in server

function handler(req,res){
    //handling CORS.
    res.setHeader('Access-Control-Allow-Origin', '*');

    if (req.url==="/"){

        fs.readFile('./db.json','utf-8',(err,data)=>{
            if(err) throw error
            res.writeHead(200,{"Content-Type":"text/json"})
            res.end(data)

            console.log(data)
            

        })

    }

    //GeT request
    if (req.url==="/get" && req.method==="GET"){
       getReq(req,res)

    }
    if (req.url==="/post" && req.method==="POST"){
        postReq(req,res)
 
     }

}


//callback function for Get request
function getReq(req,res){

        res.writeHead(200,{"Content-Type":"text/json"})
        res.end(JSON.stringify({os,cpu}))
        
        console.log(os)
        

    }

    function postReq(req,res){

        res.writeHead(200)
        res.end(JSON.stringify({message:"I am post request"}))
        
        
    }



server.listen(3000,"127.0.0.1",()=>{
    console.log('server is running')
})