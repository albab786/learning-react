const PropsUsers=({users})=>{
    console.log(users);
    
    return(
        <div>
            <h1>Props users</h1>
            
              {/* { 
               users.map((ele,i)=>{
                let {id,name,company,desiganation}=ele
                return (
                    <section key={id}>
                        <h2>id is:{id}</h2>
                        <h3>name is;{name}</h3>
                        <h4>company is:{company}</h4>
                        <h5>desiganation is :{desiganation}</h5>
                    </section>
                )
                 
                })
            }  */}


                { 
                    users.map(({id,name,company,designation},i) =>{
                     
                     return (
                         <section key={id}>
                             <h2>id is:{id}</h2>
                             <h3>name is;{name}</h3>
                             <h4>company is:{company}</h4>
                             <h5>designation is :{designation}</h5>
                         </section>
                     )
                      
                     })
                 }

           
            
        </div>
    )
}
export default PropsUsers;