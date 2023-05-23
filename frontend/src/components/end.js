import { useLocation } from "react-router-dom";
import Confetti from "react-confetti";
import { useEffect,useState } from "react";
import "./end.css"
import axios from "axios";
import Navbar from"./navbar"
import FramerMotion from "./framer-motion";
import { Hearts } from  'react-loader-spinner'

function End(){
    const location = useLocation()
    console.log(location.state,"input")
    const [showConfetti, setShowConfetti] = useState(false);
    const [storedata,updateStoredata]=useState([]);
    let data;
    if(location.state===null){
         data=JSON.parse(sessionStorage.getItem("outputData"))
    }
    else{
        sessionStorage.setItem("outputData",JSON.stringify(location.state))
        data=location.state
    }
      useEffect(()=>{
        
        const baseURL2=`${process.env.REACT_APP_API_URL}/match?category=${data.category}&colorFinal=${data.colorFinal.slice(1)}`
        axios.get(baseURL2)
        .then((res)=>{
            console.log("eeeeeeeeee")
            // console.log("fccccinsl result",res)
            updateStoredata(res.data)
            
        })
    },[data.colorFinal])
    useEffect(()=>{
        setShowConfetti(true);
       const timer= setTimeout(() => {
            console.log(setShowConfetti(false ))
          }, 6000);
          return () => clearTimeout(timer);
    },[])
    
    return(
        
    //    {
         storedata.length===0?
            <> 
                <Navbar/>
                <div style={{backgroundColor:"black",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <Hearts 
                    height="80"
                    width="80"
                    color="#fff"
                    ariaLabel="hearts-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
                </div>
            </>:
            <> 
            <Navbar/>
        <FramerMotion storeData={storedata} />
       <div id="end">
       
       {showConfetti && <Confetti />}
        {console.log(storedata)}
                </div>
</>
    //    }
        
    )
}
export default End;