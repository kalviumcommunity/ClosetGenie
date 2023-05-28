const express =require("express");
require('dotenv').config()
var cors = require('cors')
require("./db/conn")
const Match = require("./modules/match");
const CategoryMatch=require("./modules/CategoryMatch")

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
    try{let queryFinal=req.query.category
        let queryFinal2=`#${req.query.colorFinal}`
        const matchData=await Match.find({ $or: [ {  $and:[{input:queryFinal },{ inputCode:queryFinal2 }] },{ $and:[{output:queryFinal },{ outputCode:queryFinal2 }] } ] })
        res.send(matchData);
        
    }catch(e){
        res.send(e)
        console.log(e,"error in get of /match")
    }
})
app.get("/prefinded",async(req,res)=>{
    try{
        const prefindedData=await Match.find()
        res.json(prefindedData)
        // res.send(matchData);
        
    }catch(e){
        res.send(e)
        console.log(e,"error in get of /match")
    }
})
app.get("/color",async(req,res)=>{
    try{
        let queryValue=req.query.input
        console.log(queryValue)
        const colorData=await Match.find({ $or: [ { input:queryValue }, { output:queryValue } ] })
        // console.log({queryValue,colorData})
        let colorOutput=colorData.map((data)=>{
           return queryValue==data.input?{colorName:data.inputColor,colorCode:data.inputCode}:{colorName:data.outputColor,colorCode:data.outputCode}
        })
        let result=[];
        colorOutput.forEach((elt)=>{
            let exist=result.find(a=>a.colorCode==elt.colorCode)
            if(!exist)result.push(elt)
            // console.log(result);
        })
        res.send(result);
        // console.log(query);
    }catch(e){
        res.send(e)
        console.log(e,"error in get of /color")
    }
})
app.post("/like",async(req,res)=>{
    // console.log(req.body)
    let likedBody=req.body
        const liked = await Match.findOneAndUpdate({_id:likedBody.productId }, {
            
            $addToSet:{likedUser:likedBody.userID}
      });
      console.log(liked)
      res.status(201).send("sucesss"); 
})
app.post('/unlike',async(req,res)=>{
    let likedBody=req.body
   const unliked= await Match.findOneAndUpdate({_id:likedBody.productId },{
    $pull: { likedUser: likedBody.userID  }
   })
   res.status(201).send("sucesss");     
})
app.get('/wishlist',async(req,res)=>{
    let userEmail=req.query.email
    let body=await Match.find({})
    // console.log(body)
    let wishlisted=body.filter((elt)=>{
        let result= elt.likedUser.filter((likedUserEmail)=>{
            
                return likedUserEmail===userEmail
            
        })
        return result.length>0
    })
    res.send(wishlisted)
})
app.post('/delete',async(req,res)=>{
    let Body=req.body
    const deleted= await Match.findOneAndUpdate({_id:Body.productId },{
     $pull: { likedUser: Body.userID  }
    })
    res.status(201).send("sucesss");     
 
})
app.post("/men",(req,res)=>{
    // console.log(req.body)
    const user = new CategoryMatch(req.body);
    user.save().then(()=>{
        res.status(201).send(user);
    }).catch((e)=>{
        console.log(e)
        res.status(400).send(e)
    })
})
app.get('/men', async (req, res) => {
        const gender = req.query.gender;
        try {
          if (gender === 'male') {
            const maleData = await CategoryMatch.find({ gender: 'male' });
            res.json(maleData);
          } else if (gender === 'female') {
            const femaleData = await CategoryMatch.find({ gender: 'female' });
            res.json(femaleData);
          } else {
            res.status(400).json({ message: 'Invalid gender' });
          }
        } catch (err) {
          console.error(err);
          res.status(500).json({ message: 'Server Error' });
        }
      });
      app.get('/healthz',async(req,res)=>{
        res.status(201).send("healthSucesss"); 
      })

app.listen(port,()=>{
    console.log(`connection is at ${port}`)
})
