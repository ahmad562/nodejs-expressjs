const express = require('express');
const app = express();
const connectDB = require('./db/db_connection');

const Employee = require('./models/employeeModel');
connectDB();
app.use(express.json());

app.delete('/employees/:id', async (req, res)=>{
    try{
        const employeID = req.params.id        
        const result = await Employee.findByIdAndDelete(employeID);
        if(!result){
            return res.status(404).json({ msg: "Record Not Found"})
        }else{
            res.json({ msg: "Record Deleted Successfully"});
        }
    }catch(error){
        console.error("Error fetching Employees data:", error)
        res.status(500).send('Server Error');
    }
    
})



app.listen(2000, ()=>{
    console.log("selver is listinign at posrt: 2000");
});

