//!props means properties
//props are inbulit object

import PropsChild from "./PropsChild1";

//!parent to child only,for data  transfer in object form
const PropsParent=()=>{
    let data="hello world"
    return(
        <div>
            <h1>Props Example</h1>
            <PropsChild data={data}></PropsChild>
        </div>
    )
}
export default PropsParent;