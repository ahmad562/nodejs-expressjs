const express = require('express');
const app = express();
const connectDB = require('./db/db_connection');

const Employee = require('./models/employeeModel');
connectDB();
app.use(express.json());

app.get('/search-emp/:value', async (req, res)=>{
    try{
        const searchValue = req.params.value;       
        const result = await Employee.find({
            "$or" : [
                { "name": { $regex : searchValue , $options : "i"} },
                { "email": { $regex : searchValue , $options : "i"} },
                { "position": { $regex : searchValue , $options : "i"} },
                { "department": { $regex : searchValue , $options : "i"} }


            ]
        });
        if(!result){
            return res.status(404).json({ msg: "Record Not Found"})
        }else{
            res.send(result);
        }
    }catch(error){
        console.error("Error fetching Employees data:", error)
        res.status(500).send('Server Error');
    }
    
})



app.listen(2000, ()=>{
    console.log("selver is listinign at posrt: 2000");
});

