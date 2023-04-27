import React from "react";
import logo from "./resources/a2.png"
import { Link } from "react-router-dom";
import ResponsiveAppBar from "./components/homenav";

function Home(){

    return(
        <div id="home">
           <div id="left"><img id="home_svg" src={logo} alt="logo"/></div>
           <div id="right">
            <ResponsiveAppBar/>
            <div id="welcome">
                <div id="welcome2" >Welcome</div>
                <div id="lorem" className="center2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum, mauris id placerat vehicula, lorem sapien suscipit massa, in pellentesque sem magna eu massa. Quisque vel aliquet erat.
                </div>
            </div>
           <Link to="/homeMain"> <button id="black">Get pairing</button></Link>
           </div>
        </div>
       
    )
}
export default Home;