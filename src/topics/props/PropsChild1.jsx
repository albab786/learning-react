const PropsChild=(props)=>{
    
    let {data:{data,arr}}=props
    console.log(data);
   
    return(
        <div>
            <h2>Props child1{data}</h2>
            <h1>props child 2{arr}</h1>
        </div>
    )
}
export default PropsChild;