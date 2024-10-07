// import ChildB from "./ChildB";

// const ChildA=(props)=>{
//     // console.log(props);
//     let {props2}=props;
    
//     return(
//         <div><h1>Child A</h1>
//         <ChildB products={props.products}></ChildB>
//         </div>

//     )
// }
// export default ChildA;

import ChildB from "./ChildB";

const ChildA = (props) => {
    let { products } = props; // Make sure the name matches between ChildA and ChildB

    return (
        <div>
            <h1>Child A</h1>
            <ChildB prop2={products}></ChildB> {/* Pass prop2 correctly */}
        </div>
    );
}
export default ChildA;
