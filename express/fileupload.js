const express = require('express');
const connectDB = require('./db/db_connection');
const File = require('./models/fileModel');
const multer = require('multer');

const app = express();
connectDB();

const fileUpload = multer({
    storage: multer.diskStorage({
        destination : function(req, file, callback){
            callback(null, 'uploads')
        },
        filename : function(req, file, callback){
            const uniquefilename = file.fieldname + '-' + Date.now() + '.jpg';
            callback(null, uniquefilename);
        }
    })
}).single("my_file");


app.post('/fileupload', fileUpload, async (req,res)=>{
    if(!req.file){
        return res.status(404).send("File not uploaded");
    }
    const newfile = new File({
        filepath : req.file.path
    });
     newfile.save()
    .then(()=> res.send("file uploaded successfully"))
    .catch((error)=> res.send("Error uploading file", error))
})


app.listen(2000);