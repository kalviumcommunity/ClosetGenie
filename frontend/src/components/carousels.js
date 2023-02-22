import React,{useEffect, useState} from "react";
import { Quotes } from "../data/quotes";

function Carousels() {
    const [count, setCount] = useState(0)
     
    useEffect(() => {
        const interval = setInterval(() => {
            if(count === Quotes.length - 1) {
                setCount(0)
            } else {
                setCount(count => count + 1)
            }
        }, 5000);

        return () => clearInterval(interval);
    }, [count]);

    return(
        <div id="car">
            <div id="quotes">
                {Quotes[count].text}
            </div>
            <div id="author">
                {Quotes[count].author}
            </div>
            
        </div>
    )
}
export default Carousels;