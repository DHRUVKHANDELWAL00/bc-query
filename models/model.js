const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    'S.No': {
        type: Number,
        required: true
    },
    'Name of BC': {
        type: String,
        required: true
    },
    'Contact Number': {
        type: Number,
        required: true
    },
    Gender: String,
    'Bank Name': String,
    State: String,
    District: String,
    'Office Name': String,
    Pincode: Number,
    'Corporate BC name': String,
    'ODOP product': String,
    'CODE WORD OF PRODUCT LIST': String,
    'CROP1 NAME': String,
    'CROP1 SEASON': String,
    'CROP1 AREA': String,
    'CROP1 PRODUCTION': Number,
    'CROP1 Pincode': Number,
    'CROP NAME': String,
    SEASON: String,
    'CROP AREA': Number,
    'CROP PRODUCTION': Number,
    'CROP NAME__1': String,
    SEASON__1: String,
    'CROP AREA__1': Number,
    'CROP PRODUCTION__1': Number,
    Latitude: Number,
    Longitude: Number
});
const Item = mongoose.model('Item', itemSchema, 'items');

module.exports = Item;