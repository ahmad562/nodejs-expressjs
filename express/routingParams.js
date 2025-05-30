const express = require('express');
const app = express();


app.get('/',(request,response)=>{
    if(request.query.name){
        response.send(`Welcome ${request.query.name.toUpperCase()
            
        }`)
    }else{
        response.send("Welcome to learning routing paraments");
    }
});


app.listen(1000,()=>{
    console.log('app is runing on port no 1000')
})