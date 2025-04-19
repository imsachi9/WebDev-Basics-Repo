const fs = require("fs")

// //sync... blocking
// fs.writeFileSync("./test.txt", "Hey there! Im sachin")

// //Async... non-blocking
// fs.writeFile("./test.txt", "Hey there! Im sachin", (err) => {})

// //Read Sync
// fs.readFileSync("./test.txt", "utf8")

// //Read Async
// fs.readFile("./test.txt", "utf8", (err, data) => {
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(data)
//     }
// })

// //append
// fs.appendFileSync("./test.txt", "I'm a software engineer")

// //copy
// fs.copyFileSync("./test.txt", "./copy.txt")

// //delete -- unlink file
// fs.unlinkSync("./copy.txt")/

// const os = require("os")
// console.log(os.cpus().length)

