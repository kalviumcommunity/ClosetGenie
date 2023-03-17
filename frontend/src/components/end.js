import { useLocation } from "react-router-dom";

// import { Result } from "./women";
function End(){
    const location = useLocation()
    console.log(location.state[0].input)
    return(
       <div id="end">
        {
            location.state.map((show)=>{
                console.log("hhhh",process.env.REACT_APP_IMAGE_URL)
                // console.log(show.image.whiteLemonadeshort)
                return(
                    
                    <div  id="enddiv">
                        <div>{show.input}</div>
                        <img id="imgend"  src={`${process.env.REACT_APP_IMAGE_URL}/images/${show.image}`} alt="image" />
                        <div>{show.output}</div>
                    </div>
                )
                // console.log(show)
              
                })
            }
                </div>
        
    )
}
export default End;