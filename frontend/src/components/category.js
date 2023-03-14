import ComboBox from "./search"
import line from "../resources/Line 1.svg"
import SendIcon from '@mui/icons-material/Send';
import Men from "./men's"
import Button from '@mui/material/Button';
import Women from "./women"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
function Category(){
const[result,setResult]=useState([])
const navigate=useNavigate()
const handlePair=() => {
    navigate("/outcome", { state: result })
}
    return(
        <div id="font">
           <div id="column">
                <div>Find pairs for your clothes</div>
                <div><ComboBox/></div>
                 
                 <Button onClick={handlePair} id="pairing" variant="contained" endIcon={<SendIcon />}>Send</Button>
                
           </div>

           <div id="middle">
                <div id="lefty">
                    <div id="men">Men's</div>
                    <div >
                        <Men result={result} setResult={setResult}/>
                    </div>
                </div>
                <div id="small"><img src={line} alt="line" /></div>
                <div id="righty">
                    <div id="women">Women's</div>
                    <div >
                        <Women result={result} setResult={setResult}/>
                    </div>
                </div>
           </div>

        </div>
        
    )
}
export default Category