import { Images } from "../data/image"
import red from "../resources/like/Fire Heart.svg"
import black from "../resources/like/Favorite.svg"
import { useState,useEffect } from "react"
function OverviewPrefinder(){
    const [link1, setLink1] = useState(black)
    const [link2, setLink2] = useState(black)
    const [link3, setLink3] = useState(black)
    const [index,updateIndex]=useState(0)
    
    useEffect(() => {
            if(index+2 === Images.length - 1) {
                updateIndex(0)
            } 
    }, [index]);


    const indexChange=()=>{
        updateIndex(index=>index+1)
        setLink1(black)
        setLink2(black)
        setLink3(black)
    }
    const revert=()=>{
        
        setLink1(black)
        setLink2(black)
        setLink3(black)
    }
    const color1=()=> {
        if(link1===red){
            setLink1(black)
        }
        else if(link1===black){
            setLink1(red)
        }
    }
    const color2=()=> {
        if(link2===red){
            setLink2(black)
        }
        else if(link2===black){
            setLink2(red)
        }
    }
    const color3=()=> {
        if(link3===red){
            setLink3(black)
        }
        else if(link3===black){
            setLink3(red)
        }
    }
    return(
        <div id="pre">
            <div id="heading">prefinded</div>
            <div className='line'>
                <div id="prev" onClick={revert}><span className="material-symbols-outlined">
                                    arrow_back_ios
                                </span>
                </div>
                <div className="line" >
                    <div className="image">
                        <img  src={Images[index].img}/>
                        <div className="link" onClick={color1}><img src={link1}/></div>
                    </div>
                    <div className="image">
                        <img  src={Images[index+1].img}/>
                        <div className="link" onClick={color2}><img src={link2}/></div>
                    </div>
                    <div className="image">
                        <img src={Images[index+2].img}/>
                        <div className="link" onClick={color3}><img src={link3}/></div>
                    </div>
                </div>
                <div id="next" onClick={indexChange}>
                    <span className="material-symbols-outlined">
                         arrow_forward_ios
                    </span>
                </div>
            </div>
        </div>
    )
}
export default OverviewPrefinder