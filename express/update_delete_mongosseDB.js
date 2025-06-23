const express = require('express');
const connectDB = require('./db/db_connection');
const employee = require('./models/employeeModel');

const app = express();
connectDB();

const getEmployee = async () =>{
    const employees = await employee.find();
    console.log(`Employee Data Defore Update: ${employees}` );
}

const updateEmployee = async (id, updateData) => {
    const result = await employee.updateOne({ _id: id}, {$set: updateData});
    console.log(
        result.nModified === 0 ? 'No updates for employee ${id}' : 'Updated Employee Data:',  result
    )
}

const deleteEmployee = async (id) => {
    await employee.findOneAndDelete(id);
    console.log(`Employee ${id} deleted`)
}

const main = async ()=>{
    const employeeID = '6858ee3a6cb941893d9d21f3';
    const updatedData = {
        position : "Senior Social mobilizer",
        department : "Gender Social"
    }
    getEmployee();
    updateEmployee(employeeID, updatedData);

    deleteEmployee(employeeID);
}

main();

app.listen(2000);