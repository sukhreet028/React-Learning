import {useState } from 'react';
 function   Ex(){
     const [count,setCount]= useState(0);

     function dec(){
         setCount(prevcount => prevcount-1);
     }

     function inc(){
        setCount(nextcount => nextcount+1);
     }
  return(
      <div>
          <button onClick={dec}>-</button>
          <span>{count}</span>
          <button onClick={inc}>+</button>
      </div>
  )};
  export default Ex;