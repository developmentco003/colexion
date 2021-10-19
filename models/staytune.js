const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StaytuneSchema = new Schema({
    
    email: {
        type: String,
        required: true,
    }
    
});

module.exports = mongoose.model('Staytune', StaytuneSchema);