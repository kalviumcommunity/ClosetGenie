import { Images } from "../data/image" 
import { useState,useEffect } from "react"
import "./prefinder.css"
import close from "../resources/Close.svg"
import LoginButton from "./login"
function OverviewPrefinder(){
    const [index,updateIndex]=useState(0);
    const [flag,updateFlag]=useState(false)
    
    useEffect(() => {
            if(index+2 === Images.length - 1) {
                updateIndex(0)
            } 
    }, [index]);
    const [currWidth,updatewidth]=useState(window.screen.width)
        useEffect(() => {
            const handleResize = () => {
              updatewidth(window.innerWidth);
            };
            window.addEventListener('resize', handleResize);
          }, []);


    const indexChange=()=>{
        updateIndex(index=>index+1)
    }
    const revert=()=>{
        updateIndex(index=>index-1)
    }
    if(currWidth>1033){
    return(
        <div id="pre">
            <div id="heading">prefinded</div>
            <div className='line'>
                <div style={{display: (flag===true?"flex":"none")}} id="outerModal2">
                   <div id="innerModal2">
                    <div id="flex20">
                        <div>please login for liking</div>
                        <img onClick={()=>updateFlag(false)} width="40vw" src={close} alt=""/>
                    </div>
                    <LoginButton/>
                    
                   </div>
                </div>              
                <div id="prev" onClick={revert}><span className="material-symbols-outlined">
                                    arrow_back_ios
                                </span>
                </div>
                <div className="line" >
                    <div className="image">
                        <img  src={Images[index].img} alt="slide" />
                    </div>
                    <div className="image">
                        <img  src={Images[index+1].img} alt="slide2" />
                    </div>
                    <div className="image">
                        <img src={Images[index+2].img} alt="slide3" />
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
else if(currWidth>=719&&currWidth<=1033){
    return(
        <div id="pre">
            <div id="heading">prefinded</div>
            <div className='line'>
                <div id="prev" onClick={revert}><span className="material-symbols-outlined">
                                    arrow_back_ios
                                </span>
                </div>
                <div className="line" id="spaceBetweenImage" >
                    <div className="image" style={{width:"40vw"}}>
                        <img style={{objectFit:"fit"}}  src={Images[index].img} alt="slide" />
                    </div>
                    <div className="image"  style={{width:"40vw"}}>
                        <img style={{objectFit:"fit"}}  src={Images[index+1].img} alt="slide2" />
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
else {
    return(
    <div id="pre">
            <div id="heading">prefinded</div>
            <div className='line'>
                <div id="prev" onClick={revert}><span className="material-symbols-outlined">
                                    arrow_back_ios
                                </span>
                </div>
                <div className="line" id="spaceBetweenImage" >
                    <div className="image" style={{width:"60vw"}}>
                        <img style={{objectFit:"fit"}}  src={Images[index].img} alt="slide" />
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
}

export default OverviewPrefinder