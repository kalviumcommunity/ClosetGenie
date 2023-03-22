import logo from "../resources/a1.png";
import { Link } from "react-router-dom";
import LoginButton from "./login";
import LogoutButton from "./logout";
import { useAuth0 } from "@auth0/auth0-react";

function NavBar(){
    // const Authenticated = useAuth0().isAuthenticated;
    const {isAuthenticated}=useAuth0
            return(
                <div id="flex">
                    <img height="95vh" src={logo} alt="logo" />
                    <Link className="center" to="/homeMain">Home</Link>
                    {console.log(isAuthenticated)}
                    {isAuthenticated?<LogoutButton/>:<LoginButton/>}
                    <Link className="center" to="/">Your Closet</Link>
                    <Link className="center" to="/about">About us</Link>
                    <Link className="center" to="/contact">Contact us</Link>
                </div>
 )
 }
 export default NavBar;