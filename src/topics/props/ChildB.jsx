// const ChildB=(y)=>{
//     let {prop2}=y
  
//     return(
//         <div>
//         { 
//                prop2.map((ele,i)=>{
//                 let[id,title,img]=ele
//                 return (
//                     <div>
//                         <h2>id is:{products.title}</h2>
//                         <h3>name is:{products.id}</h3>
//                         </div>
//                 )
//                 })
//             } 
//         </div>

//     )
// }
const ChildB = ({ prop2 }) => {
    return (
        <div>
            { 
                prop2.map((ele, i) => {
                    const { id, title, img } = ele; // Destructure the object
                    
                    return (
                        <div key={id}> {/* Use a unique key */}
                            <h2>Title: {title}</h2>
                            <h3>ID: {id}</h3>
                            <img src={img} alt={title} />
                        </div>
                    );
                })
            } 
        </div>
    );
}
export default ChildB;


