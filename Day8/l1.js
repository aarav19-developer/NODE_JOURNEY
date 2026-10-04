// EXPRESS JS:-
// Express is a framework built on top of Node.js.
// It gives you shortcuts and structure for common tasks:
// Routing: Cleanly define endpoints (app.get("/about", ...))
// Middleware: Easily add features like logging, authentication, body parsing
// Error Handling: Centralized and simple
// Community: Tons of plugins already built (e.g., cors, helmet, express-session)


// Why do we need? 
// Node.js gives you the engine to run JavaScript outside the browser.
// You can build a web server with it, but you’ll end up writing a lot of manual code:
// Parsing URLs
// Handling routes (if (req.url === "/about") ...)
// Managing request/response headers
// Error handling

// for downloading express comand (npm i express)



// const http = require("http")  eski bhi need nhi h 
const express = require("express")

const app = express();

app.get("/", (req, res) => {
    return res.send("Hello from Home Page")
});

app.get("/about", (req, res) => {
    return res.send("Hello from About Page")

})

// const myServer = http.createServer(app)
// myServer.listen(2207, () => console.log("Start ho gya h "))   y nhi krna express easy kr deta h esko aur jyada


app.listen(2207, ()=> console.log("Server started!"))

// NOTE: No need to install url package from now bcz express can manage everything itself.
