import { useEffect, useState } from "react"
import axios from "axios"
function Menint(){
    const[menData,updateMenData]=useState([])
    useEffect(() => {
        const baseURL = `${process.env.REACT_APP_API_URL}/men?gender=male`
        console.log(baseURL)
        axios.get(baseURL)
            .then((response) => {
                console.log(response)
                updateMenData(response.data)
            }).catch((e) => {
                console.log(e, "error")
            })
    }, [])

    return(
        <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap"}}>
            {menData.map((e)=>{
                return (
                    <div style={{display:"flex",flexDirection:"column",margin:"2%"}}>
                        
                    <img style={{maxHeight:"400px",width:"300px",objectFit:"cover"}} src={`${process.env.REACT_APP_IMAGE_URL}/images/category/men/${e.img}`} />
                    {e.title}
                    </div>
                )
            })}
            
        </div>
    )
}
export default Menint;