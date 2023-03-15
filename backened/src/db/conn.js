const mongoose=require("mongoose");
mongoose.connect(process.env.connectionURL).then(()=>{
    console.log("connection is successful");
}).catch((e)=>{
    console.log(e)
    console.log("no connection");
})