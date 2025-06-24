const mongoose = require('mongoose');

const fileModel = new mongoose.Schema({
    filepath: String,
});


module.exports = mongoose.model('File',fileModel);