import logo from "./resources/a1.png";
import { Link } from "react-router-dom";
function NavBar(){
            return(
                <div id="flex">
                    <img height="95vh" src={logo} alt="logo" />
                    <Link className="center" to="/homeMain">Home</Link>
                    <Link className="center" to="/">prefinded</Link>
                    <Link className="center" to="/">Your Closet</Link>
                    <Link className="center" to="/about">About us</Link>
                    <Link className="center" to="/contact">Contact us</Link>
                </div>
 )
 }
 export default NavBar;