const mongoose = require("mongoose");


const NoteSchema = new mongoose.Schema({
name:{
    type: String,
    required: "Please enter name",
    trim:true,
},
description :{
    type: String,
    
},
creater: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
}

})

module.exports = Note;