// EVENT DRIVEN ARCHITECTURE OR ARCHITECTURE OF NODE JS :

// (User) -------- request -------- (event queue)  
//                              {This is watched by event loop {which took task in FIFO manner
//                                and check that task is Non blocking or blocking}} 

            //    ----------- {If non blocking then instantly process and return the result}
            //    ------------ {If blocking then send that task to thread pool(It is a pool which have thread(worker)
            //                    which process that task and after done return in the pool) 
            //                            then task return result to the user }

            // NOTE: Thread Pool only have 4 thread. Suppose all 4 worker are doing their task and no thread left then in that case server will wait



const fs = require("fs")

// // Sync... Blocking...
// fs.writeFileSync("./text.txt", "Hello Dears");

// //Async... Non Blocking...
// fs.writeFile("./Text.txt", "Hello Dear zindagi", (err)=>{})



// Blocking...

// console.log("1")

// const result = fs.readFileSync("../Day3/Text1.txt", "utf-8")
// console.log(result)

// console.log("2")


// In this task perform line by line.


// Non Blocking...

console.log("1")

const result = fs.readFile("../Day3/Text1.txt", "utf-8", (err, result)=>{
    console.log(result)

})

console.log("2")


// This gives result in Async type. As in this first 1, 2 print then result.

// NOTE: 
   // Default Thread Pool  Size is 4.
   // Maximum depend upon the cpu core of that particular system.

const os = require("os")

console.log(os.cpus().length)  // My max Thread size is 16