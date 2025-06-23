const express = require("express");
const reFilter = require("./middleware");


const app = express();
const route = express.Router();

route.use(reFilter);


// app.get('/',reFilter, (req,res) =>{

//     res.send("Welcome to Express js middle  passed");
// })


route.get('/',reFilter, (req,res) =>{

    res.send("Welcome to Express js middle  passed");
})

app.use('/',route);
app.listen(2000);