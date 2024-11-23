import { useState } from "react";
import Loadingbar from "../loadingbar/Loadingbar";
import { useEffect } from "react";
import Home from "../Home/Home";

export default function Loadingpage(){
    const [loading,Setloading] = useState(false);
    useEffect(()=>{
        Setloading(true);
        setTimeout(()=>{
            Setloading(false)
        },3000);
    },[])
    return(
    <div>
        {
            loading ? <Loadingbar/> : <Home/>
        }
    </div>
    )
}