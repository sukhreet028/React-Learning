const Text=(prop)=>{
  const {num,changeName,name}=prop;
  let myText=[];
  if(num>0) {
    for(let i=0; i<num; i++){
      myText.push(i);
    }
  }

return(
  <div>
    {myText.map((index)=>(
      <div>
      <div>
      <h1 style= {{color: changeName [index] }} > Helllo {name[index]}</h1>
     </div>
     <div>
     <h2>{name[index]} is a so kind <span style={{color: changeName[index]}}> human </span></h2>
     </div>
     </div>
    ))}
    <p>how are you</p>
  
  </div>
)
}
export default Text;
