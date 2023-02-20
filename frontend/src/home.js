import React from "react";
import logo from "./resources/a2.png"
import Homenav from "./homenav";
import { Link } from "react-router-dom";
// import NavBar from "./navbar";
function Home(){
    return(
        <div id="home">
           <div id="left"><img id="home_svg" src={logo} alt="logo"/></div>
           <div id="right">
            <Homenav/>
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

//font-family: 'Libre Baskerville', serif;
// @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap');
//font-family: 'Questrial', sans-serif;
//<style>
//@import url('https://fonts.googleapis.com/css2?family=Questrial&display=swap');
//</style>