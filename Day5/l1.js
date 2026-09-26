// SERVER BUILDING:

// const http = require("http");

// const myServer = http.createServer((req, res)=>{
//     // console.log("New request Record")
//     console.log(req)
//     res.end("Hello from Server")
// });  // arrow function is reponsible for my incoming server request

// // Go to package.json there you have to write script like you "start": node filename(without extension). Then terminal npm start. 
// myServer.listen(8000,()=>console.log("Server Started!"));



// const http = require("http");
// const fs = require("fs")


// const myServer = http.createServer((req, res)=>{


//     const log  = `${Date.now()}: ${req.url} New request received\n`
//     fs.appendFile("log.txt", log , (err, data)=>{
//         res.end("Hello from Server again")

//     })
//     // console.log(req)
//     // res.end("Hello from Server")
// });  // arrow function is reponsible for my incoming server request

// // Go to package.json there you have to write script like you "start": node filename(without extension). Then terminal npm start. 
// myServer.listen(8000,()=>console.log("Server Started!"));

// const myServer = http.createServer((req,res)=>{
//     console.log("Server start")

//         switch(req.url){
//             case '/': 
//                res.end("Home Page")
//                break
//             case '/about': 
//                res.end("About Page")
//                break
//             default:
//                 res.end("404 Not Found")

//         }
//     })

// myServer.listen(8002,()=>console.log("Start"))


const http = require("http")

const MyServer = http.createServer((req,res)=>{
    console.log("Server Start")
    switch(req.url){
        case '/':
            res.end("Home h ye")
            break
        case '/about':
            res.end("Hum h ye ")
            break
        default:
            res.end("22 not found")
    }
})

MyServer.listen(2207,()=> console.log("SURU"))