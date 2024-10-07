import React from "react"
const Y=(props)=>{
    let val="BYE"
    function handleChanger(){
        props.setData(val)
    }
    return (
        <div>
            <p> Y Component</p>
            <button onClick={handleChanger}>change</button>
        </div>
    )
}
export default Y;