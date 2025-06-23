const express = require('express');
const connectDB = require('./db/db_connection');
const employee = require('./models/employeeModel');

const app = express();

connectDB();

const addEmployee = async ()=>{
    await employee.create({
        name : 'Kazim Jan',
        email : 'kazimjan@gmail.com',
        position : "social mobalizer",
        department : "social Team"
    })
}

addEmployee();

const getEmployee = async ()=>{
    const empoyees = await employee.find();
    console.log(empoyees);
}
getEmployee();
app.listen(2000);