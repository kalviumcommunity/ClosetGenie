import "./framer-motion.css";
import { motion } from "framer-motion";
import blacki from "../resources/like/redOutline.svg"
import red from "../resources/like/Fire Heart.svg"
import { useState } from "react";
import { useEffect } from "react";
import { useAuth0 } from '@auth0/auth0-react';
import axios from "axios";
import LoginButton from "./login";

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

const hue = (h) => `hsl(${h}, 0%, 100%)`;

function Card({ image, hueA, hueB, storeData, i,flag,updateFlag }) {
  // const[likedUser,updateLikedUser]=useState()
  const { isAuthenticated, user, getAccessTokenSilently } = useAuth0();
  const [like, updateLike] = useState([{}])
  
  // const [likeCount, updateLikeCount] = useState([])
  // const { isAuthenticated, user } = useAuth0();
  const background = `linear-gradient(0deg, ${hue(hueA)}, ${hue(hueB)})`;

  // console.log(user)
  useEffect(() => {

    storeData.map((show, i) => {
      if (show.likedUser) {
        var likedObjectArray = show.likedUser.find((elt) => {
          return (elt === user?.email)
        })
      }

      if (likedObjectArray) {
        updateLike(prev => {
          // console.log(prev)
          let newlike = [...prev]
          newlike[i] = { color: "red", count: show.likedUser.length }
          return newlike
        }
        )
      }
      else {
        updateLike(prev => {
          // console.log(prev)
          let newlike = [...prev]
          newlike[i] = { color: "black", count: show.likedUser.length }
          return newlike
        }
        )
      }
    })
  }, [user])
  // useEffect(()=>{
  //   storeData.map((show,i)=>{
  //   updateLikeCount(likeCount[i]=show.likedUser.length)
  //   })
  // },[like])
  const store = (i, id) => {
    if (isAuthenticated) {
      console.log(i, id)
      if (like[i].color !== "red") {
        axios.post(`${process.env.REACT_APP_API_URL}/like`, {
          productId: id,
          userID: user.email
        })
          .then(() => {
            updateLike(prev => {

              let newlike = [...prev]
              newlike[i] = { color: "red", count: newlike[i].count + 1 }
              return newlike

            })
          })
      }
      else {
        axios.post(`${process.env.REACT_APP_API_URL}/unlike`, {
          productId: id,
          userID: user.email
        }).then(() => {
          updateLike(prev => {
            let newlike = [...prev]
            newlike[i] = { color: "black", count: newlike[i].count - 1 }
            return newlike
          })
        })
      }
    }
    else {

updateFlag(true)


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
        <img style={{ width: "95%", borderRadius: "20px", height: "95%", objectFit: "cover" }} src={image} alt="image" />
        <img id={storeData[i]._id} style={{ height: "7vh", position: "absolute", right: "-20px", bottom: "25px" }} src={like[i]?.color === "red" ? red : blacki} alt="like" onClick={() => store(i, storeData[i]._id)}  ></img>
        <div style={{ height: "5vh", fontSize: "17px", position: "absolute", bottom: "6px", right: "3px", fontWeight: "bolder", backgroundColor: 'rgba(255, 0, 0, 0.7)', borderRadius: "2500px", width: "20px", height: "21px", textAlign: "center", color: "white" }}>
          {like[i]?.count}
          {/* {likeCount[i]} */}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function FramerMotion({ storeData }) {

  const[flag,updateFlag]=useState(false)
  // let max = 360;
  // let min=0;
  return (
    <div>
      <div className="card-grp">
        {storeData.map((data, i) => (
          <Card flag={flag} updateFlag={updateFlag} storeData={storeData} i={i} image={`${process.env.REACT_APP_IMAGE_URL}/images/${data.image}`} hueA={0} hueB={0} key={data.image} />
        ))}
      </div>
      <div style={{ backgroundColor: "rgba(255, 255, 255, 0.621)",width: "100%",height: "100%",position: "fixed",zIndex: "1",left: "0",top: "0",display: (flag === true ? "flex" : "none"),justifyContent: "center",alignItems: "center",}} >
        <div id="endLogin" style={{display:"flex",flexDirection:"column"}}>
          <div id="textStyle" style={{fontSize:"2rem"}}>Please login for liking</div>
          <LoginButton/>
        </div>
        </div>
    </div >
  )
}
