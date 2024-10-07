const Y=(prop)=>{
    let val="BYe"
    function handleChanger(){
        prop.setData(val)
    }
    return (
        <div>
            <p> Y Component</p>
            <button onClick={handleChanger}></button>
        </div>
    )
}
export default Y;