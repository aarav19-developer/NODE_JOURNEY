// HTTPS  METHODS:-

                    // 1. Get method  === for fetching the data
                    // 2. Post method  === for create something on server
                    // 3. Put method  === when you have to put something on server like file upload
                    // 4. Patch method  === when you have to chnge, update or edit something on server
                    // 5. Delete method === for delete purpose

const http = require("http")
const fs = require("fs")
const url = require("url")

const myServer = http.createServer((req,res)=>{
    if (req.url === "/.favicon.ico") 
        return res.end();
     const log = `${Date.now()}: ${req.method} ${req.url} New Req Received\n`
     const myUrl = url.parse(req.url, true);
     fs.appendFile("log.txt", log, (err,data)=>{
        switch (myUrl.pathname) {
            case "/":
                if (req.method === "GET") res.end("Home page")
                res.end("Home Page")
                break
                case "/about":
                    res.end("About page")
                    break
                case "/contact":
                    res.end("Contact Page")
                    break
                case "/SignUp":
                    if (req.method === "GET") res.end("This is a Sign Up page")
                        else if (req.method === "POST") {
                    // DB Query
                    res.end("Success");
                }
                default:
                    res.end("Not Found")
        }
     })
})

myServer.listen(2207, ()=> console.log("Start ho gya h "))