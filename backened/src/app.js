const express =require("express");
var cors = require('cors')
require("./db/conn")
const Match = require("./modules/match");
const app=express()
const port = process.env.PORT || 2000;
app.use(cors())
app.use(express.json())
app.post("/match",(req,res)=>{
    console.log(req.body)
    const user = new Match(req.body);
    user.save().then(()=>{
        res.status(201).send(user);
    }).catch((e)=>{
        console.log(e)
        res.status(400).send(e)
    })
})
app.get("/match",async(req,res)=>{
    try{
        const matchData=await Match.find();
        res.send(matchData);
    }catch(e){
        res.send(e)
        console.log(e,"error in get")
    }
})

app.listen(port,()=>{
    console.log(`connection is at ${port}`)
})