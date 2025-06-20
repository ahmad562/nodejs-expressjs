const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/welcome',(req,res)=>{
    const employe_data = {name:'Waqas Riaz', age:32}
    res.render('welcome',{employe_data});
})

app.listen(2000,()=>{
    console.log('your app is listing at port no 2000')
})
