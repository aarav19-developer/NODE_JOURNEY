// URL (Uniform Resource Locator):-

// https://www.dearzindagi.com/ ======>
                                
        //  here https:// ----- is hyper text transfer protocol secure : set of rules that tells browser in which way you have to communicate.
        // www.dearzindagi.com ----- is domain- userfriendly name of IP address of my server. 
        // / --- route path (home).


        // QUERY PARAMETERS:
                    // These are the extra information which we pass with url.
                          // Ex: dearzindagi.com/about?userid=1&s=22 ======> here ? is query parameter after this all extra information carried by the url.

                          // NOTE: JS cann't have space in url so it use + sign.



const http = require("http")
const fs = require("fs")


const url = require("url") // phle check krega ki url h ya nhi then package m dekhega agr khi nhi mila then vo khud ka package use krega


const myServer = http.createServer((req,res)=>{
    if(req.url === '/favicon.ico') return res.end()
    
    const log = `%{Date.now()}: ${req.url} New Request Received\n`;

    const myUrl = url.parse(req.url, true)
    console.log(myUrl)

    fs.appendFile("log.txt",log, (err,data) =>{
    switch(myUrl.pathname){   //phle switch m req.url tha
        case "/":
            res.end("Home Page")
            break
        case "/about":
            // res.end("This is About Page")
            const username = myUrl.query.myname;
            res.end(`Hi, ${username}`)
            break
        default:
            res.end("not found")
    }
})
})

myServer.listen(2207, ()=> console.log("START"))



// NOTE: ab jaise hi mene localhost:2207 ( mere server) pr /about?myname... kuch bhi additional dala toh not found aa gya but log.txt m vo likha aaya ki kya mee search kia tha and usme vo parse nhi hua ki uss url ka prototype kya h auth kya h and host kya h and all. 
          // So essi problm ko solve krne ke liye hme (npm i url) command run krni hogi terminal pr jisse vo npm i url ke saare method ko download kr lega and phir hme url me sb kuch parse krke de dega.

// NOTE: package.json = declarative spec (dependency ranges).

        // package-lock.json = deterministic spec (exact resolved versions).