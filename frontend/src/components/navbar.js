import logo from "../resources/a1.png";
import { Link } from "react-router-dom";
import LoginButton from "./login";
function NavBar(){
            return(
                <div id="flex">
                    <img height="95vh" src={logo} alt="logo" />
                    <Link className="center" to="/homeMain">Home</Link>
                    <LoginButton/>
                    <Link className="center" to="/">Your Closet</Link>
                    <Link className="center" to="/about">About us</Link>
                    <Link className="center" to="/contact">Contact us</Link>
                </div>
 )
 }
 export default NavBar;