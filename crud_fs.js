const fs = require('fs');
const path = require('path');

const myCRUD = path.join(__dirname, "CRUD");
const myPath  = `${myCRUD}/crud.txt`;

// create
//fs.writeFileSync(myPath, "Create Read Update and Delete Operation");

// read
// fs.readFile(myPath, 'utf8', (error, file) => {
//    // console.log(file.toString());
//     console.log(file);
// })

//update 
// fs.appendFile(myPath, " in node js file system", (error) => {
//     if(!error){
//         console.log("File Updated Successfully");
//     }
// })

// delete file
const newpath = `${myCRUD}/newnameCRUD.txt`;
// fs.unlinkSync(myPath);
fs.unlinkSync(newpath);

//rename file
// fs.rename(myPath, newpath ,(error) => {
//     if(!error){
//         console.log("File renamed successfully");
//     }
// });