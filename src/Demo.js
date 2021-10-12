
import React from 'react'
class Demo extends React.Component{
   constructor(){
       super();
       this.state= {
           name:'Sukhi',
           email: 'sukhreet028@gmail.com'
       }
    }
      Myinfo()
      {
        this.setState({
            name:'Ravneet',
            email:'ravneet028@gmail.com'
           });  
      } 
      render()
      {
        return(
         <div id="update">
         <p>Name:{this.state.name}</p>
         <p>Email:{this.state.email}</p>
         <button onClick={()=>{this.Myinfo()}}>Update</button>
         </div>
        );
    }
}
 export default Demo;
