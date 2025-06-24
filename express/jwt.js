const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const secretkey = 'asdadadadasdasdqweqweqweqeq';

app.post('/login', (req, res) => {
    const user = {
        username : 'Waqas Ahmad',
        email : 'ahmadwaqas562@gmail.com'
    };
    const token = jwt.sign( user, secretkey, { expiresIn : '500s'});
    res.json({token});
});

// creating middleware function 
const verfiyToken = (req, res, next) =>{
    const headerBearer = req.headers['authorization'];
    if(headerBearer){
        const token = headerBearer.split(" ")[1];
        req.token = token;
        next();
    }else{
        res.status(403).json({ result: "Invalid token"})
    }
}

app.post('/protected', verfiyToken, (req,res)=>{
    jwt.verify(req.token, secretkey, (err, authData)=>{
        if(err){
            res.status(403).json({ result: "Unathorized User"})
        }else{
            res.json({
                msg : "Authorized successfully",
                authData
            });
        }
    })

})

app.listen(2000);