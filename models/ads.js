const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdsSchema = new Schema({
    url: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    }
    
});

module.exports = mongoose.model('Ads', AdsSchema);