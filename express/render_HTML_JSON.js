const express = require('express');
const app = express();

app.get("/",(request, response)=>{
    response.send(`
        <input type="text" placeholder="Your name" >
        <a href="/contact" >Go to Contact page</a>
        `);
});

app.get("/contact",(request, response)=>{
    response.send([
        {"name":"Waqas Ahmad", "Department":"HR"},
        {"name":"Waqas Ahmad", "Department":"HR"},
        {"name":"Waqas Ahmad", "Department":"HR"}

    ]);
});


app.listen('2000');