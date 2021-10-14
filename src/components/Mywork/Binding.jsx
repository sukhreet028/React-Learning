import { useState } from "react";
function Binding(){
    const [val1,val2]=useState();
    const ourData=(event)=>{
        val2(event.target.value);
    }
    return(
    <><h1>hii:<br></br>{val1}</h1>
<input onChange = {($hh)=> ourData($hh)}
  value={val1}/>
  </>
    )    
}
export default Binding;