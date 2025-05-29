const fs = require('fs');
const path = require('path');

const myFolder = path.join(__dirname,'myfolder');

for(let i = 0; i<3; i++){
    fs.writeFileSync(`${myFolder}/show${i}.txt`, "this is file no:"+i);
}
fs.readdir(myFolder)