import { useEffect, useState } from "react"
import axios from "axios"
function Womenint(){
    const[womenData,updateWomenData]=useState([])
    useEffect(() => {
        const baseURL = `${process.env.REACT_APP_API_URL}/men?gender=female`
        console.log(baseURL)
        axios.get(baseURL)
            .then((response) => {
                console.log(response)
                updateWomenData(response.data)
            }).catch((e) => {
                console.log(e, "error")
            })
    }, [])

    return(
        <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap"}}>
            {womenData.map((e)=>{
                return (
                    <div style={{display:"flex",flexDirection:"column",margin:"2%"}}>
                        
                    <img style={{maxHeight:"400px",minHeight:"400px",width:"300px",objectFit:"cover"}} src={`${process.env.REACT_APP_IMAGE_URL}/images/category/${e.img}`} />
                    {e.title}
                    </div>
                )
            })}
            
        </div>
    )
}
export default Womenint;