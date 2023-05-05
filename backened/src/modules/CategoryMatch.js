const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
title:{
    type:String,
    // required:true
},
img:{
    type:String,
},
gender:{
    type:String,
    // required:true
}
})
const CategoryMatch = new mongoose.model('CategoryMatch',CategorySchema);
module.exports=CategoryMatch;