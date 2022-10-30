// models file 
let mongoose = require("mongoose");

let contactModel = mongoose.Schema({
    name:String,
    number : String,
    email_address: String
},
{
    collection:"contact_list"
}

);

module.exports = mongoose.model("contact_list",contactModel);
