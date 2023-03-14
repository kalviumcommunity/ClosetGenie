const mongoose = require("mongoose");

const matchingSchema = new mongoose.Schema({
    input:{
        type: String,
        required: true
    },
    inputColor:{
        type: String,
        required:true
    },
    inputCode:{
        type:String,
        required:true
    },
    output:{
        type: String,
        required:true
    },
    outputColor:{
        type:String,
        required:true
    },
    outputCode:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
})
const Match = new mongoose.model('Match',matchingSchema);
module.exports=Match;