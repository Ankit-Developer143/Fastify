const mongoose = require("mongoose");

const userModal = new mongoose.Schema({
    name:String,
    city:String
})
module.exports = mongoose.model('user',userModal);