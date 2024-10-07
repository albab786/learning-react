import React from "react"
import Y from "./Y"

const  X=()=>{
    let [data,setData]=useState("hello")
    return(
       <div>
        <p>X Component{data}</p>
        <Y setData={setData}>/</Y>
       </div>
    )
}
export default X;