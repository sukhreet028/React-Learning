import React from 'react'
 function Myfile(h){
     const Fun=()=>{
        document.getElementById('demo').innerHTML='Welcome';
        document.getElementById('demo').style.color='blue';
        //  alert('Congratulations for creating first react app')
        
     }
     return(
         <>
         <div>
         <h1>{h.name}</h1>
         <h1>{h.data}</h1>
         </div>
         {/* <h1 id="demo">Bonjour</h1> */}
         <div>
         <h1 id="demo">{h.text}</h1>
         <button onClick={Fun}>Click Me</button>
         </div> 
         </>
     )
 }
 export default Myfile;