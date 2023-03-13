import { useLocation } from "react-router-dom";

// import { Result } from "./women";
function End(){
    const location = useLocation()
    console.log(location.state[0].input)
    return(
       <div id="end">
        {
            location.state.map((show)=>{
                console.log(show.image.whiteLemonadeshort)
                return(
                    
                    <div  id="enddiv">
                        <div>{show.input}</div>
                        <img id="imgend"  src={show.image}/>
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