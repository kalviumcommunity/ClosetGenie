import { MenData } from "../data/menData";
import { useState } from "react";
import close from "../resources/Close.svg"
import {Ans }from "../data/outcome.js"
function Men({result,setResult}){
    const[flag,updateFlag]=useState(false)
    const[categoryWomen,updateWomen]=useState("")
    const[color,updatecolor]=useState("")
    const [favorableArray,updateFavorablearray]=useState([])
    const ModalOpen=({favorableArray})=>{
       
           
        //    console.log(favorableColor)
            return(
                
                <div style={{display: (flag===true?"flex":"none")}} id="outerModal">
                   <div id="innerModal">
                    <div id="colorflex">colors
                        <img onClick={()=>updateFlag(false)} width="40vw" src={close} alt=""/>
                    </div>
                    <div id="colorarrange">
                    {favorableArray.map((color)=>{
                        // console.log(color.)
                        return(
                            <div  className={`modalWidth ${color.outputColor}`} id={color.inputColor}  onClick={colorchange} style={{backgroundColor:(categoryWomen==color.input? color.inputCode:color.outputCode)}}></div>
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
            updateFavorablearray(Ans.filter((out)=>{
                return out.input==e.target.alt || out.output==e.target.alt
            }))
            console.log(favorableArray)
            // console.log(favorableArray)
            // console.log(favorableColor)
            
            return(
                console.log(categoryWomen)
                
            )
        }
        const colorchange=(e)=>{
            updatecolor(e.target.id)
            updateFlag(false)
            
            console.log(e.target)
            console.log(color)
            setResult(Ans.filter((out)=>{

                return ((out.input==categoryWomen && out.inputColor==e.target.id)||(out.output==categoryWomen && `modalWidth ${out.outputColor}`== e.target.className))
                
            })
            )
            console.log("hjghghg",result)
        }
       
        
    return(
        <div id="menCategory">
            {MenData.map((image)=>{
                // console.log(image.img)
               return(
                <div className="tops" onClick={updateCategory}>
                   {image.title }
                   <img width="100vw" src={image.img} alt={image.title}/>
                </div>
               )
              
            })}
           <ModalOpen favorableArray={favorableArray}/>
            
        </div>
    )
}
export default Men;
