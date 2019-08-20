const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    photo: { type: String, default: 'nopic.png' },
    location: {
        lat: { type: Number },
        lgn: { type: Number }
    }
}, {
    timestamps:true
});

const Shop = mongoose.model('Shop', schema);
module.exports = Shop;