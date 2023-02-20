import { Link } from "react-router-dom";
function Homenav(){
return(
    <div id="space">
        <Link className="center2" to="/homeMain">Home</Link>
        <Link className="center2" to="about">About us</Link>
        <Link className="center2" to="contact">Contact us</Link>
    </div>
   
)
}
export default Homenav;