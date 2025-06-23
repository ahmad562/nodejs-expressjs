const express = require('express');
const app = express();
const connectDB = require('./db/db_connection');

const employee = require('./models/employeeModel');
connectDB();

app.get('/employees', async (req, res)=>{
    try{
        const employees = await employee.find();
        if(employees){
            res.json(employees);
        }
    }catch(error){
        console.error("Error fetching Employees data:", error)
        res.status(500).send('Server Error');
    }
    
})

app.get('/employee/:id', async (req, res)=>{
    try{
        const employee_data = await employee.findById(req.params.id);
        if(!employee_data){
            res.status(404);
        }else if(employee_data){
            res.json(employee_data);
        }
    }catch(error){
        console.error("Error fetching Employees data:", error)
        res.status(500).send('Server Error');
    }
    
})


app.listen(2000, ()=>{
    console.log("selver is listinign at posrt: 2000");
});

