const mongoose = require('mongoose');

const MessageSchema = mongoose.Schema({

    title: {
        type: String,

    },

    description: {

        type: String,
    },

    date: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('Message', MessageSchema);