const express = require('express');
const app = express();
const connectDB = require('./db/db_connection');

const employee = require('./models/employeeModel');
connectDB();
app.use(express.json());

app.post('/employees', async (req, res)=>{
    try{
        const { name, email, position, department } = req.body;
        const newEmployees = new employee({
            name,
            email,
            position,
            department
        });
        const result = await newEmployees.save();
        if(result){
            res.json(result);
        }
    }catch(error){
        console.error("Error fetching Employees data:", error)
        res.status(500).send('Server Error');
    }
    
})



app.listen(2000, ()=>{
    console.log("selver is listinign at posrt: 2000");
});

