import NavBar from "./components/navbar";
import Carousels from "./components/carousels";
import OverviewPrefinder from "./components/prefinderoverview";
function Main(){
    return(
        <div id="main">
        <NavBar/>
        <Carousels/>
        <OverviewPrefinder/>
        </div>
    )
}
export default Main;