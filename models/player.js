const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: String,
        required: true,
    },
    cflag: {
        type: String,
        required: true,
    },
    pflag: {
        type: String,
        required: true,
    },
    orun: {
        type: String,
        required: true,
    },
    orate: {
        type: String,
        required: true,
    },
    owicket : {
        type: String,
        required: true,
    },
    ocatch: {
        type: String,
        required: true,
    },
    trun: {
        type: String,
        required: true,
    },
    trate: {
        type: String,
        required: true,
    },
    twicket : {
        type: String,
        required: true,
    },
    tcatch: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Player', PlayerSchema);