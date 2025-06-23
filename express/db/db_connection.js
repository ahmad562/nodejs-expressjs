const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        await mongoose.connect('mongodb+srv://WaqasWebDeveloper:D%26%24D%40%232%40ZTPH@cluster0.n2ormal.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        console.log("Mongo DB Connected Successfully");
    }
    catch(err){
        console.log("Mongo DB connection error", err)
    }
}

module.exports = connectDB;