const express = require('express');

const app = express();

app.get('/',(request, response)=>{
    response.send("Good Morning From Express JS. Happy Learning Express");
});

app.get('/contact',(request, response)=>{
    response.send("Contact");
});

app.listen(1000);