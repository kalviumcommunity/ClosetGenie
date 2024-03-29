// import { WomenData } from "../data/womenData"
import { useEffect, useState } from "react"
import {Vortex } from  'react-loader-spinner'
import { Hearts } from  'react-loader-spinner'
// import { colors } from "../data/color"
import axios from "axios";
import { useNavigate } from "react-router-dom"
import close from "../resources/Close.svg"
import "./women.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Women({ categoryWomen, updateWomen, flag, updateFlag, color, updatecolor }) {
    const[womenCategory,updateWomenCategory]=useState([])
    const [loading,updateLoading]=useState(false)
    const navigate = useNavigate()
    const ModalOpen = () => {
        const [colorAPI, updateColorAPI] = useState([])
        useEffect(() => {
            const baseURL = `${process.env.REACT_APP_API_URL}/color?input=${categoryWomen}`
            console.log(baseURL)
            axios.get(baseURL)
                .then((response) => {
                    updateColorAPI(response.data)
                    // console.log(response.data)
                }).catch((e) => {
                    toast.error("somthing went wrong!", {
                        // theme:"dark"
                    })
                    console.log(e, "error")
                })
                // .finally(()=>{
                //     updateLoading(false)
                //     console.log(loading,"jnjxjdxdb")
                // })
            console.log({ color })
        }, [categoryWomen])

            

        useEffect(() => {
            
            if (categoryWomen && color) {
                navigate("/outcome", { state: { category: categoryWomen, colorFinal: color } })
            }
        }, [])
        
        return (

            <div style={{ display: (flag === true ? "flex" : "none") }} id="outerModal">
                <ToastContainer />
                <div id="innerModal">
                    <div id="colorflex">colors
                        <img onClick={() => updateFlag(false)} width="40vw" src={close} alt="" />
                    </div>
                    <div id="colorarrange">
                    {colorAPI.length===0?<div style={{marginTop:"20%"}}><Hearts 
                                            height="80"
                                            width="80"
                                            color="#000000"
                                            ariaLabel="hearts-loading"
                                            wrapperStyle={{}}
                                            wrapperClass=""
                                            visible={true}
                                        />
                                        </div>:
                                        colorAPI.map((color) => {
                            // console.log(color.)
                            return (
                                <div className={`modalWidth ${color.colorCode}`} id={color.colorCode} onClick={colorchange} style={{ backgroundColor: color.colorCode }}></div>
                            )
                        })}
                    

                    </div>

                </div>
            </div>

        )
    }
    useEffect(()=>{
        const CategoryURL=`${process.env.REACT_APP_API_URL}/men?gender=female`
        // console.log(baseURL)
        axios.get(CategoryURL)
        .then((response)=>{
           updateWomenCategory(response.data)
            // console.log(response.data)
        }).catch((e)=>{
            console.log(e,"error")
        })
        // console.log({color})
    },[])
    const updateCategory = (e) => {
        updateWomen(e.target.alt)
        updateFlag(true)
        return (
            console.log(categoryWomen)

        )
    }
    const colorchange = (e) => {
        updatecolor(e.target.id)
    }
    
    return (
        womenCategory.length===0?
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <Vortex
                 visible={true}
                 height="80"
                 width="80"
                 ariaLabel="vortex-loading"
                 wrapperStyle={{}}
                 wrapperClass="vortex-wrapper"
                 colors={['white', 'white', 'white', 'white', 'white', 'white']}
                 />
        </div>:
       
        <div id="womenCategory">
            {womenCategory.map((image) => {
                // console.log(image.img)
                return (
                    <div className="tops" onClick={updateCategory}>
                        {image.title}
                        <img width="100vw" src={`${process.env.REACT_APP_IMAGE_URL}/images/category/${image.img}`} alt={image.title} />
                    </div>
                )
            })}
            <ModalOpen />

        </div>
    )
}
export default Women
