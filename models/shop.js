const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    photo: { type: String, default: 'nopic.png' },
    location: {
        lat: { type: Number },
        lgn: { type: Number }
    }
}, {
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    });

//find menu shop _id === Menu shop
schema.virtual('menus', {
    ref: 'Menu',
    localField: '_id',
    foreignField: 'shop'
});

const Shop = mongoose.model('Shop', schema);
module.exports = Shop;