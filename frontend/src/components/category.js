import ComboBox from "./search"
// import line from "../resources/Line 1.svg"
import Men from "./men's"
import Women from "./women"

import { useState ,useEffect} from "react"
function Category(){
    const[color,updatecolor]=useState("")
    const[categoryWomen,updateWomen]=useState("")
    const[flag,updateFlag]=useState(false)
    const[fontSize,updateFontSize]=useState("")

    const [currWidth,updatewidth]=useState(window.screen.width)
    useEffect(() => {
        const handleResize = () => {
          updatewidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
      }, []);

      useEffect(()=>{
        if(currWidth>=539&&currWidth<600)
        {
            updateFontSize("large")
        }
        else if(currWidth<539&&currWidth>239){
            updateFontSize("small")
        }
      })
      
    return(
        <div id="font">
           <div id="column">
                <div style={{fontSize:`${fontSize}`}}>Find pairs for your clothes</div>
                <div><ComboBox categoryWomen={categoryWomen} updateWomen={updateWomen} flag={flag} updateFlag={updateFlag} currWidth={currWidth} /></div>
                
           </div>

           <div id="middle">
                <div id="lefty">
                    <div id="men">Men's</div>
                    <div >
                        <Men categoryWomen={categoryWomen} updateWomen={updateWomen} updatecolor={updatecolor} color={color} flag={flag} updateFlag={updateFlag} />
                    </div>
                </div>
                <div id="small">
                    {/* <img src={line} alt="line" />*/}
                    </div> 
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