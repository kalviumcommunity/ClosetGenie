import ComboBox from "./search"
import line from "../resources/Line 1.svg"
import Men from "./men's"
import Women from "./women"

import { useState } from "react"
function Category(){


    return(
        <div id="font">
           <div id="column">
                <div>Find pairs for your clothes</div>
                <div><ComboBox/></div>
                
           </div>

           <div id="middle">
                <div id="lefty">
                    <div id="men">Men's</div>
                    <div >
                        <Men/>
                    </div>
                </div>
                <div id="small"><img src={line} alt="line" /></div>
                <div id="righty">
                    <div id="women">Women's</div>
                    <div >
                        <Women/>
                    </div>
                </div>
           </div>

        </div>
        
    )
}
export default Category