import NavBar from "./components/navbar";
import Carousels from "./components/carousels";
import OverviewPrefinder from "./components/prefinderoverview";
import Category from "./components/category";

function Main(){
    
    return(
        <div id="main">
         <NavBar/>
         <Carousels />
         <OverviewPrefinder />
         <Category />
        </div>
    )
}
export default Main;