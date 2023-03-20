import { WomenData } from "../data/womenData"
import { useEffect, useState } from "react"
// import { colors } from "../data/color"
import axios from "axios";
import { useNavigate } from "react-router-dom"
import close from "../resources/Close.svg"
import {Ans }from "../data/outcome.js"
function Women({    categoryWomen , updateWomen,flag,updateFlag,color,updatecolor}){
    const navigate=useNavigate()
    
    
    // const[categoryWomen,updateWomen]=useState("")
   
    // const[color,updatecolor]=useState("")
    const ModalOpen=()=>{
        const[colorAPI,updateColorAPI]=useState([])
        useEffect(()=>{
            const baseURL=`${process.env.REACT_APP_API_URL}/color?input=${categoryWomen}`
            console.log(baseURL)
            axios.get(baseURL)
            .then((response)=>{
                updateColorAPI(response.data)
                console.log(response.data)
            }).catch((e)=>{
                console.log(e,"error")
            })
            console.log({color})
            },[categoryWomen])

        useEffect(()=>{
            const baseURL2=`${process.env.REACT_APP_API_URL}/match?category=${categoryWomen}&colorFinal=${color.slice(1)}`
            axios.get(baseURL2)
            .then((res)=>{
                if(!res.data||res.data.length===0)return
                console.log("finsl result",res)
                // setResult(res.data)
                navigate("/outcome", { state: res.data })
                
            },[color])
        })
        //    console.log(favorableColor)
            return(
                
                <div style={{display: (flag===true?"flex":"none")}} id="outerModal">
                   <div id="innerModal">
                    <div id="colorflex">colors
                        <img onClick={()=>updateFlag(false)} width="40vw" src={close} alt=""/>
                    </div>
                    <div id="colorarrange">
                    {colorAPI.map((color)=>{
                        // console.log(color.)
                        return(
                            <div  className={`modalWidth ${color.colorCode}`} id={color.colorCode}  onClick={colorchange} style={{backgroundColor:color.colorCode}}></div>
                        )
                    })}
                    
                    </div>
                    
                   </div>
                </div>
               
            )
        }
        const updateCategory=(e)=>{
            updateWomen(e.target.alt)
            updateFlag(true)
            return(
                console.log(categoryWomen)
                
            )
        }
            
            
        
        
        const colorchange=(e)=>{
            updatecolor(e.target.id)
        } 
    return(
        <div id="womenCategory">
            {WomenData.map((image)=>{
                // console.log(image.img)
               return(
                <div className="tops" onClick={updateCategory}>
                   {image.title }
                   <img width="100vw" src={image.img} alt={image.title}/>
                </div>
               )
            })}
           <ModalOpen/>
            
        </div>
    )
}
// export const Result = Ans;
export default Women
