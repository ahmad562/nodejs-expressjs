const express = require('express');
const connectDB = require('./db/db_connection');

const app = express();

// Connect to the database
connectDB();

const user = require('./models/userModel');

const adduser = async () => {
    await user.create({
        name : "waqas Ahmad Developer",
        email : 'ahmadwaqas562@gmail.com'
    })
}

adduser();

app.listen(2000);