import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState,useEffect} from "react";
function Homenav(){
    // let hamburger=React.createRef()

    const [currWidth,updatewidth]=useState(window.screen.width)
    useEffect(() => {
        const handleResize = () => {
          updatewidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
      }, []);
    //   if(currWidth<320){
    //     hamburger.style.display="none"
    // }
    const [count,incCount]=useState(0);
    
   const Hamburger=()=>{
   
    incCount(count=>count+1);
        
    }
return(
    <div>
            <div id="space" style={{display: (currWidth<363&&count%2===0?"none":"flex"),flexDirection: (currWidth>363?"row":"column")}} >
                <Link className="center2" to="/homeMain">Home</Link>
                <Link className="center2" to="about">About us</Link>
                <Link className="center2" to="contact">Contact us</Link>
                <div>{currWidth}</div>
            </div>
            <div id="hamburger" style={{display:currWidth>363?"none":"flex"}}>
                <button onClick={Hamburger}><MenuIcon/></button>

            </div>
    </div>
   
)
}
export default Homenav;