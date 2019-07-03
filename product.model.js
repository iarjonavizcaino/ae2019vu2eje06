var mongoose = require("mongoose");

module.exports = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    brand: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Brand'
    }
});