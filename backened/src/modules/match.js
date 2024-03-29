const mongoose = require("mongoose");

const matchingSchema = new mongoose.Schema({
    input:{
        type: String,
        required: true,
        index:true
    },
    inputColor:{
        type: String,
        required:true
    },
    inputCode:{
        type:String,
        required:true,
        index:true
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
    },
    likedUser:[{
        type:String
    }]
})
const Match = new mongoose.model('Match',matchingSchema);
module.exports=Match;