const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EnterSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    
    
});

module.exports = mongoose.model('Enter', EnterSchema);