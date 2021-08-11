const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({

email:{
    type: String,
    required: "Please enter email",
    trim:true,
    unique:true,
},
password: {
type:String,
required:true,
}

})

module.exports = User;