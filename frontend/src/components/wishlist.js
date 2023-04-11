import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import Navbar from "./navbar";
import "./wishlist.css";
import Delete from '../resources/like/Delete.svg';
function Wishlist(){
    const [result,updateResult]=useState([])
    const{isAuthenticated,user}=useAuth0()
    const deleteData=async(i,id)=>{
      await axios.post(`${process.env.REACT_APP_API_URL}/delete`,{
            productId:id,
            userID:user.email
      }) 
      .then(()=>{
        updateResult((prev)=>{
            let deleteOneArray=[...prev]
            deleteOneArray.splice(i,1)
            return deleteOneArray
        })
      }) 
    }
    useEffect(()=>{
        const baseURL3=`${process.env.REACT_APP_API_URL}/wishlist?email=${user?.email}`
        axios.get(baseURL3)
        .then((res)=>{
            updateResult(res.data)
        })
            
        
        .catch((e)=>{
            console.log("error",e)
        }
        )
    },[user])
    console.log(result,"kygybggffxw",user)
    return(
        <div id="wish">
            <Navbar/>
            
            {result.map((e,i)=>{
               { console.log(e)}
               return(
                <div className="wishdiv">
                <div id="titleResult">{e.input}</div>
                <img className="imgwish" src={`${process.env.REACT_APP_IMAGE_URL}/images/${e.image}`} alt="image" />
                <div>{e.output}
                <img id={e._id} style={{height:"7vh"}} src={Delete} alt="delete"  
                 onClick={()=>deleteData(i,e._id)}
                   ></img>               
                </div>
               
                </div>
               )
               
            })}
           
            
        </div>
        )
}

export default Wishlist;