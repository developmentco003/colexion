const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LatestSchema = new Schema({
    text: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    }
    
});

module.exports = mongoose.model('Latest', LatestSchema);