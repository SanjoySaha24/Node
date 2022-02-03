let fs = require("fs")
// Input
let inputArr = process.argv.slice(2)
//console.log(inputArr);

//Options
let optionsArr = [];
let filesArr = [];

// identify -> options
for(let i=0; i<inputArr.length; i++){
    let firstChar = inputArr[i].charAt(0);
    if(firstChar=="-"){
        optionsArr.push(inputArr[i])
    }
    else{
        filesArr.push(inputArr[i])
    }
}

// read
let content = "";
for(let i=0; i<filesArr.length; i++){
      // buffer
      let bufferContent = fs.readFileSync(filesArr[i]);
      content += bufferContent+"\n";

}
console.log(content)