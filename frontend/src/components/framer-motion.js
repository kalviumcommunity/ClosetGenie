import "./framer-motion.css";
import { motion, Variants } from "framer-motion";
import blacki from "../resources/like/redOutline.svg"
import red from "../resources/like/Fire Heart.svg"
import { useState } from "react";
import { useEffect } from "react";
import { useAuth0 } from '@auth0/auth0-react';
import axios from "axios";

const cardVariants = {
  offscreen: {
    y: 300
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const hue = (h) => `hsl(${h}, 100%, 50%)`;

function Card({ emoji, hueA, hueB,storeData,i}) {
    const[likedUser,updateLikedUser]=useState()
    const { isAuthenticated, user } = useAuth0();
    const [like,updateLike]=useState([])
    // const { isAuthenticated, user } = useAuth0();
const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;
console.log(storeData)

useEffect(()=>{
        
    storeData.map((show,i)=>{
        if(show.likedUser){
            var a=show.likedUser.find((e)=>{
                return e===user?.email
            })
        }
       
        if(a){
            updateLike(prev=>{
                // console.log(prev)
                let newlike=[...prev]
                newlike[i]="red"
                return newlike
        }
            )
    }
    })
  },[user])



const store=async(i,id)=>{
    console.log(i,id)
    if(like[i]!=="red"){
      await axios.post(`${process.env.REACT_APP_API_URL}/like`,{
          productId:id,
          userID:user.email
        })
        .then(()=>{
          updateLike(prev=>{
              // console.log(user[i].likedUser)
              let newlike=[...prev]
              newlike[i]="red"
              return newlike
                
        })
    })
  }
  else{
      await axios.post(`${process.env.REACT_APP_API_URL}/unlike`,{
          productId:id,
          userID:user.email
      }).then(()=>{
          updateLike(prev=>{
              let newlike=[...prev]
              newlike[i]="black"
              return newlike
          })
      })
  }
}
  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className="splash" style={{ background }} />
      <motion.div className="card" variants={cardVariants}>
        <img style={{width:"95%",borderRadius:"20px",height:"95%",objectFit:"cover"}}src={emoji} alt="emoji"/>
        <img id={storeData[i]._id} style={{height:"7vh",position:"absolute",right:"-20px",bottom:"20px"}} src={like[i]==="red"?red:blacki} alt="like"   onClick={()=>store(i,storeData[i]._id)}  ></img>
      </motion.div>
    </motion.div>
  );
}

export default function FramerMotion({storeData}) {
    

    let max=360;
    // let min=0;
  return<div className="card-grp">{ storeData.map((data,i) => (
    <Card storeData={storeData} i={i} emoji={`${process.env.REACT_APP_IMAGE_URL}/images/${data.image}`} hueA={Math.floor(Math.random() * (max+ 1))} hueB={Math.floor(Math.random() * (max+ 1))} key={data.image} />
  ))}</div>
}