const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShopbySchema = new Schema({
    curl: {
        type: String,
        required: true,
    },
    surl: {
        type: String,
        required: true,
    },
    aurl: {
        type: String,
        required: true,
    },
    lurl: {
        type: String,
        required: true,
    }
    
});

module.exports = mongoose.model('Shopby', ShopbySchema);