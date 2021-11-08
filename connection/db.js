var mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/fastifynew'

mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;

con.on("open", function() {
    console.log("Connected...");
});