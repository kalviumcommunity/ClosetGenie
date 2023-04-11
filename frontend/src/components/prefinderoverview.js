import { Images } from "../data/image"
import red from "../resources/like/Fire Heart.svg"
 
import { useState,useEffect } from "react"
import "./prefinder.css"
import close from "../resources/Close.svg"
import { useAuth0 } from "@auth0/auth0-react"
import LoginButton from "./login"
function OverviewPrefinder(){
    const [link1, setLink1] = useState(black)
    const [link2, setLink2] = useState(black)
    const [link3, setLink3] = useState(black)
    const [index,updateIndex]=useState(0);
    const { isAuthenticated} = useAuth0();
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
        setLink1(black)
        setLink2(black)
        setLink3(black)
    }
    const revert=()=>{
        updateIndex(index=>index-1)
        setLink1(black)
        setLink2(black)
        setLink3(black)
    }
    const color1=()=> {
        if(isAuthenticated){
            if(link1===red){
                setLink1(black)
            }
            else if(link1===black){
                setLink1(red)
            }
        }
        else{
            updateFlag(true)
            
        }
     
    }
    const color2=()=> {
        if(isAuthenticated){
        if(link2===red){
            setLink2(black)
        }
        else if(link2===black){
            setLink2(red)
        }
    }
    else{
        updateFlag(true)
    }
}
    const color3=()=> {
        if(isAuthenticated){
        if(link3===red){
            setLink3(black)
        }
        else if(link3===black){
            setLink3(red)
        }
    }
    else{
        updateFlag(true)
    }
}
    if(currWidth>1033){
    return(
        <div id="pre">
            <div id="heading">prefinded</div>
            <div className='line'>


                {/* <div style={{display:(flag===true?"block":"none"),backgroundColor:"white", textAlign:"center",width:"100vw",height:"100vh",position:"absolute"}} ><div>please log in </div></div> */}
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