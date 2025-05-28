const myFile = require('fs').writeFileSync;


console.log("Node code modules Testing")   // global core modules no need to require
//myFile.writeFileSync("codeModules.txt","Node code modules testing")  // Non global code modules 

myFile("codeModules.txt","Node code modules testing")