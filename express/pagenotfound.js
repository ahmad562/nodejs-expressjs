const express = require('express');
const path = require('path');

const app = express();
const public = path.join(__dirname,'public');
app.get('/', (req,res)=>{
    res.sendFile(`${public}/index.html`);
});

app.get('/home', (req,res)=>{
    res.sendFile(`${public}/home.html`);
});

app.use((req, res) => {
    res.status(404).sendFile(path.join(public, '404.html'));
});

app.listen(2000);