const fs = require('fs');

console.log(process.argv[2]);

const action = process.argv[2];
const filename = process.argv[3];
const data = process.argv[4];

if(action == 'create'){
    fs.writeFileSync(filename,data);
}
else if(action == 'delete'){
    fs.unlinkSync(filename);
}else{
    console.log("invalied action");
}
