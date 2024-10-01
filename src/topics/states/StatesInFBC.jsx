import { useState } from "react";
//hooks are nothing inbuilt react library makes functional bases components statelesss to state
//whichever statrts with use like usestate(),,,,,,,,, are hookss
//hooks are nothing inbuilt method

const StatesInFBC=()=>{
    let [state,setState]=useState(10)
    function change(){
        console.log("btn clicked");
        setState(200)
        
           }
    return(
        <div>
            <h1>States in FBC {state}</h1>
            <button onClick={change}>Click</button>
        </div>
    )
}
export default StatesInFBC;