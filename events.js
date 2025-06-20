// built in events in nodejs

//const fs = require('fs');
const events = require('events');
// read file
// const myread = fs.createReadStream("./codeModules.txt");

// myread.on('open',()=>{
//     console.log("File opened successfully");
// });


// custome events

const eventEmitter = new events.EventEmitter();

eventEmitter.on('play', (type)=>{
    console.log("i am playing "+type);
})

eventEmitter.emit('play','cricket123');
