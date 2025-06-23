const express = require('express');
const app = express();
const connectDB = require('./db/db_connection');

const Employee = require('./models/employeeModel');
connectDB();
app.use(express.json());

app.put('/employees/:id', async (req, res)=>{
    try{
        const employeID = req.params.id
        const { name, email, position, department } = req.body;
        
        const result = await Employee.findByIdAndUpdate(
            employeID,
            { name, email, position, department },
            { new : true}
        );
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

