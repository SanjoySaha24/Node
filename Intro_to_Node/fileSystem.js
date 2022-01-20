// fileSystem
// files -> create,        read,      update,          delete 
//  open -w,           readfileSync   appendFile       unlinkSync
// writefileSync
let fs = require("fs");

// read
// let buffer = fs.readFileSync("abc.js");
// console.log("bin data "+buffer)

// create
// fs.openSync("abc.txt","w");

// no file -> create and file exist -> content replace

// create write
// fs.writeFileSync("abc.txt","I am unhappy today);

// update
// fs.appendFileSync("abc.txt","why you are unhappy today");

// folder(directory)
// create      read           delete
// mkdirSync   readdirSync    rmdirSync

// fs.mkdirSync("meriDirectory")
// fs.writeFileSync("meriDirectory/merifile.txt","mera content");

// let content = fs.readdirSync("meriDirectory");
// console.log(content);
// for(let i=0; i< content.length; i++){
//     console.log("file ", content[i], "is removed");
    // remove file
//     fs.unlinkSync("meriDirectory/" + content[i])
// }

// remove folder
// fs.rmdirSync("meriDirectory")

// fs.existsSync -> if a file exist at a path -> true/false
// let doesPathExist = fs.existsSync("abc.txt")
// console.log(doesPathExist)

// fs.lstatSync -> fs.lstatSync
// let detailsObj = fs.lstatSync(__dirname + "\\fileSystem.js")
// let ans = detailsObj.isFile();
// console.log(ans);
// ans = detailsObj.isDirectory();
// console.log(ans);

// C:\Users\lenovo\Desktop\node\abc.js
// C:\Users\lenovo\Desktop\node\myfolder

for(let i= 1; i<=10; i++){
    let dirPathToMake = `Lecture-${i}`;
    fs.mkdirSync(dirPathToMake);
    fs.writeFileSync(dirPathToMake + "\\"+"readme.md", ` # readme for ${dirPathToMake}`)
}