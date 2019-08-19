const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: { type: String },
    age: { type: Number },
    created: { type: Date }

});

const Setting = mongoose.model('Setting', schema);
module.exports = Setting;