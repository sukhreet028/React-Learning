import './App.css';
import './List.css';
import './Head.css';
import './Demo.css';
// import React from 'react'
// class user extends React.component 
import Word from './Word';
import Myfile  from './Myfile';
import Demo  from './Demo';
import List  from './List';
import Head from './Head';


function App() {
  
  return (
    <div className="App">
      {/* <h2>hello everyone</h2> */}
      {/* <Myfile text= "passing TEXT from other file"/>
      <Demo/> */}
      <List/>
      <Head/>
      <Head/>
      <Head/>
      <Head/>
      <Demo/>
      <Footer/>
      
      {/* <Word/>
      <Greeting/> */}
    </div>
  );
}
function Greeting(){
  return(
    <div>
<h3>my name is sukhi</h3>
<p>hllo</p>
   </div>
  );
}
  function Footer()
    {
return(
  <div className="footer">
<p>copyright@write.us</p>
  </div>
);
    }


export default App;


