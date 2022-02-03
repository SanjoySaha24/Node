let inputArr = process.argv.slice(2);
let fs = require("fs")
let path = require("path")
//console.log(inputArr);
// --> $ node main2.js Hello how are you
//     [ 'Hello', 'how', 'are', 'you' ]


//3. node main.js help

let command = inputArr[0];
switch(command){
    case "tree":
        treeFn(inputArr[1]);
        break;
        case "organize":
        organizeFn(inputArr[1]);
        break;
        case "help":
        helpFn();
        break;
        default:
            console.log("Please ✌ Input Right command");
            break;
}

function treeFn(dirPath){
    console.log("Tree command implemented for ", dirPath);
}
function organizeFn(dirPath){
    // console.log("organize command implemented for ", dirPath);
    // 1. input -> directory path given
    if(dirPath == undefined){
        console.log("enter the path")
        return;
    }else{
        let doesExist = fs.existsSync(dirPath);
        if(doesExist){

        // 2. create -> organized_files -> directory
           let destPath = path.join(dirPath, "organized_files")
           if(fs.existsSync(destPath) == false){
           fs.mkdirSync(destPath);
        }
    }
    else{
            console.log("Kindly enter the correct path");
            return;
        }
    }
    // 3. identify categories of all the files present in that input directory
    // 4. cpory / cut files to that organized directory inside of any category folder

}







// done Help function
function helpFn(){
    console.log(`
    List of All the commands:
                     node main.js tree "directoryPath"
                     node main.js organize "directoryPath"
                     node main.js help
      `);
}