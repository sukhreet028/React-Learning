import './Cal.css';
import Input1 from '../input1-com/Input1'
import Buttons from '../buttons/buttons';
import { useState } from 'react';

function Cal() {
    const [result, setResult] = useState(0);
    const buttonArray = [9,8,7,6,5,4,3,2,1,0,'.'];
    // const operator=['+','-','*','/','%']
    const  [first,setFirst] = useState([]);
    const  [storeFirstValue , setStoreFirstValue] = useState();
    let operator;
    
    const sumData = (value) => {
      if(value === 'sum')
       {
        let storeSecondValue = parseInt(first.join(''));
        let sum = (storeFirstValue ? storeFirstValue : 0) + storeSecondValue;
        console.log(storeFirstValue, storeSecondValue);
        setResult(sum);
        console.log(sum);
        setFirst([]);
      }else if(value === '+') {
        setStoreFirstValue(parseInt(first.join('')));
        setFirst([]);
      } else {
        first.push(value);
        setFirst(prev =>[...prev]);
        let keys = parseInt(first.join(''));
        setResult(keys);
      }
    }
    const minData = (value) => {
        if(value === 'min')
         {
          let storeSecondValue = parseInt(first.join(''));
          let min = (storeFirstValue ? storeFirstValue : 0) - storeSecondValue;
          console.log(storeFirstValue, storeSecondValue);
          setResult(min);
          setFirst([]);
        }else if(value === '-') {
          setStoreFirstValue(parseInt(first.join('')));
          setFirst([]);
        } else {
          first.push(value);
          setFirst(prev =>[...prev]);
          let keys = parseInt(first.join(''));
          setResult(keys);
        }
      }
      const mulData = (value) => {
        if(value === 'mul')
         {
          let storeSecondValue = parseInt(first.join(''));
          let mul = (storeFirstValue ? storeFirstValue : 0) * storeSecondValue;
          console.log(storeFirstValue, storeSecondValue);
          setResult(mul);
          setFirst([]);
        }else if(value === '*') {
          setStoreFirstValue(parseInt(first.join('')));
          setFirst([]);
        } else {
          first.push(value);
          setFirst(prev =>[...prev]);
          let keys = parseInt(first.join(''));
          setResult(keys);
        }
      }
      const divData = (value) => {
        if(value === 'div')
         {
          let storeSecondValue = parseInt(first.join(''));
          let div = (storeFirstValue ? storeFirstValue : 0) / storeSecondValue;
          console.log(storeFirstValue, storeSecondValue);
          setResult(div);
          setFirst([]);
        }else if(value === '/') {
          setStoreFirstValue(parseInt(first.join('')));
          setFirst([]);
        } else {
          first.push(value);
          setFirst(prev =>[...prev]);
          let keys = parseInt(first.join(''));
          setResult(keys);
        }
      }
      function equalOperator (){
        if(sumData('+') && operator==='='){
            setResult(sum);
        }else if(sumData('-') && operator==='='){
            setResult(min);
        }else if(sumData('/') && operator==='='){
            setResult(div);
          }else if(sumData('*') && operator==='='){
            setResult(mul);
          }else{
              console.log('no operator');
          }}
    return (
      <div className='container'>
        <Input1 result={result} />
        {buttonArray.map((data) =>(<Buttons
          key={data}
          buttonType="button"
          name={data}
          classStyle="cal-button"
          func={()=>minData(data)}
        />))}
         <Buttons
          buttonType="button"
          name="="
          classStyle="cal-button"
          func={()=>equalOperator('=')}
        /> 
          <Buttons
          buttonType="button"
          name="+"
          classStyle="cal-button"
          func={()=>sumData('sum')}
        />
         <Buttons
          buttonType="button"
          name="-"
          classStyle="cal-button"
          func={()=>minData('-')}/>
          <Buttons
          buttonType="button"
          name="*"
          classStyle="cal-button"
          func={()=>mulData('*')}/>
           {/* <Buttons
          buttonType="button"
          name="="
          classStyle="cal-button"
          func={()=>divData('div')}
        /> */}
          <Buttons
          buttonType="button"
          name="/"
          classStyle="cal-button"
          func={()=>divData('/')}/>
    
        
      </div>
    );
  }
  export default Cal;