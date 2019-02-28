const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const modelSchema = new Schema({
    name:String,
    year:String,
    make:String
});

module.exports = mongoose.model('Model', modelSchema);