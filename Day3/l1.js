const fs = require("fs")

// Sync...
// fs.writeFileSync("./text.txt", "Hey Dear_Zindagi" )  // ./ ---> Current directary


// Async..
// fs.writeFile("./Text1.txt", "Hello Dears", (error)=>{})



// Qyestion???? 

// What is the diffrence between both ?
// Which one we have to use?
//  This is known as blocking and non blocking request.



const result = fs.readFileSync("./Text1.txt", "utf-8")
console.log(result)


fs.readFile("./Text1.txt", "utf-8", (err,result)=>{
    if(err){
        console.log("error:", err)
    } else{
        console.log(result)
    }
    
})


// Sync does not expect callback function and it returns something.
// Async always expect callback function and it does not returns anything.


// fs.appendFileSync("./Text1.txt", new Date().getDate().toLocaleString())
fs.appendFileSync("./Text1.txt", `\n Zindagi`)



// fs.unlinkSync("./text.txt")  // Unlink is used for delete the file.


as = fs.statSync("./Text1.txt")  // to check any file statistics
console.log(as)
