import { useLocation } from "react-router-dom";
import Confetti from "react-confetti";
import { useEffect,useState } from "react";
import red from "../resources/like/Fire Heart.svg"
import blacki from "../resources/like/black.svg"
import "./end.css"
import { useAuth0 } from '@auth0/auth0-react';
import axios from "axios";
import Navbar from"./navbar"
// import { Result } from "./women";
function End(){
    const location = useLocation()
    // console.log(black);
    console.log(location.state[0],"input")
    const [showConfetti, setShowConfetti] = useState(false);
    const [like,updateLike]=useState([])
    const { isAuthenticated, user } = useAuth0();
    useEffect(()=>{
        
        location.state.map((show,i)=>{
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
//  useEffect(()=>{
//             const baseURL3=`${process.env.REACT_APP_API_URL}/wishlist`
//             axios.post(baseURL3)
//             .then((response)=>{
//                 // updateColorAPI(response.data)
//                 console.log(response.data)
//             }).catch((e)=>{
//                 console.log(e,"error")
//             })
//             console.log({color})
//             },[categoryWomen])



    const store=async(i,id)=>{
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
     

    //   updateLike(prev=>{
    //     let newlike=[...prev]
    //     if( newlike[i]==="red"){
    //         newlike[i]="black"
    //       }
    //       else{
    //         newlike[i]="red"
    //       }
    //       return newlike
    //   })
        
    }
    useEffect(()=>{
        setShowConfetti(true)
    },[])
    let likedemo=[];
    
    return(
       <div id="end">
        <Navbar/>
        {showConfetti && <Confetti />}
        {
            location.state.map((show,i)=>{
               
                console.log("hhhh",process.env.REACT_APP_IMAGE_URL)
                likedemo.push(blacki)
                // console.log(likedemo)
                // console.log(show.image.whiteLemonadeshort)
                return(
                    
                    <div  className="enddiv">
                        <div>{show.input}</div>
                        <img id="imgend"  src={`${process.env.REACT_APP_IMAGE_URL}/images/${show.image}`} alt="image" />
                        <div>{show.output}</div>
                        <img id={show._id} style={{height:"7vh"}} src={like[i]==="red"?red:blacki} alt="like"   onClick={()=>store(i,show._id)}  ></img>
                       {show.likedUser.length}
                    </div>
                )
                // console.log(show)
              
                })
            }
                </div>
        
    )
}
export default End;