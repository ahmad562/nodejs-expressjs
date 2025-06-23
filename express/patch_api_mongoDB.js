const express = require('express');
const app = express();
const connectDB = require('./db/db_connection');

const Employee = require('./models/employeeModel');
connectDB();
app.use(express.json());

app.patch('/employees/:id', async (req, res)=>{
    try{
        const employeID = req.params.id
        const updateData = req.body;
        
        const result = await Employee.findByIdAndUpdate(
            employeID,
            { $set: updateData },
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

