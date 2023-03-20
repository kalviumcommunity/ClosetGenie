import ComboBox from "./search"
import line from "../resources/Line 1.svg"
import Men from "./men's"
import Women from "./women"

import { useState } from "react"
function Category(){
    const[color,updatecolor]=useState("")
    const[categoryWomen,updateWomen]=useState("")
    const[flag,updateFlag]=useState(false)
    return(
        <div id="font">
           <div id="column">
                <div>Find pairs for your clothes</div>
                <div><ComboBox categoryWomen={categoryWomen} updateWomen={updateWomen} flag={flag} updateFlag={updateFlag} /></div>
                
           </div>

           <div id="middle">
                <div id="lefty">
                    <div id="men">Men's</div>
                    <div >
                        <Men categoryWomen={categoryWomen} updateWomen={updateWomen} updatecolor={updatecolor} color={color} flag={flag} updateFlag={updateFlag} />
                    </div>
                </div>
                <div id="small"><img src={line} alt="line" /></div>
                <div id="righty">
                    <div id="women">Women's</div>
                    <div >
                        <Women categoryWomen={categoryWomen} updateWomen={updateWomen} updatecolor={updatecolor} color={color} flag={flag} updateFlag={updateFlag}/>
                    </div>
                </div>
           </div>

        </div>
        
    )
}
export default Category