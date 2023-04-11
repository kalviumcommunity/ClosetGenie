const mongoose =require("mongoose");

const wishlistSchema = new mongoose.Schema({
    itemsid:[{
        type: mongoose.Types.ObjectId,
        ref:'Match'
    }],
    userid:{
        type:String,
    }
})
const Wishlist = new mongoose.model('Wishlist',wishlistSchema);
module.exports=Wishlist