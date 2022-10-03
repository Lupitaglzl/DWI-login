const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name : {type: String, require: true},
    email : {type: String, require: true, unique: true},
    code : {type: String, require: true},
    status : {type: String, require: true, default: 'UNIVERIFIED'},
});

module.exports = mongoose.model ('User', UserSchema);