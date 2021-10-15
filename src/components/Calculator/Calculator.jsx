import './Cal.css';
import Input1 from '../input1-com/Input1';
import Buttons from '../buttons/buttons';
import { useState } from 'react';

function Cal() {
  const [result, setResult] = useState(0);
  const [operator, setOperator] = useState();
  const buttonArray = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, '.'];
  const operatorArray = ['+', '-', '*', '/', '%'];
  const [first, setFirst] = useState([]);
  const [storeFirstValue, setStoreFirstValue] = useState();
  let sum, min, div, mul;

  const sumData = (value) => {
    if (operator && operatorArray.includes(value)) {
      if (operator === '+') {
        // let storeSecondValue = parseInt(first.join(''));
        sum = (storeFirstValue ? storeFirstValue : 0) + result;
      } else if (operator === '-') {
        sum = (storeFirstValue ? storeFirstValue : 0) - result;
      }

      setStoreFirstValue(sum);
      console.log('iside minus ' + storeFirstValue, result, value);
      setFirst([]);
      setResult(sum);
      setOperator(value);
    } else if (value === '=') {
      let storeSecondValue = parseInt(first.join(''));
      if (operator === '+') {
        sum = (storeFirstValue ? storeFirstValue : 0) + storeSecondValue;
      } else if (operator === '-') {
        sum = (storeFirstValue ? storeFirstValue : 0) - storeSecondValue;
      }

      console.log('sum func' + storeFirstValue, storeSecondValue);
      setResult(sum);
      setOperator(null);
      setStoreFirstValue(sum);
      console.log(sum);
      setFirst([]);
    } else if (operatorArray.includes(value) && !operator) {
      setOperator(value);
      if (first.length > 0) {
        setStoreFirstValue(parseInt(first.join('')));
      }
      console.log('first' + storeFirstValue);
      setFirst([]);
    } else {
      first.push(value);
      setFirst((prev) => [...prev]);
      let keys = parseInt(first.join(''));
      setResult(keys);
    }
  };
  return (
    <div className="container">
      <Input1 result={result} />
      {buttonArray.map((data) => (
        <Buttons
          key={data}
          buttonType="button"
          name={data}
          classStyle="cal-button"
          func={() => sumData(data)}
        />
      ))}
      <Buttons
        buttonType="button"
        name="="
        classStyle="cal-button"
        func={() => sumData('=')}
      />
      <Buttons
        buttonType="button"
        name="+"
        classStyle="cal-button"
        func={() => sumData('+')}
      />
      <Buttons
        buttonType="button"
        name="-"
        classStyle="cal-button"
        func={() => sumData('-')}
      />
      <Buttons
        buttonType="button"
        name="*"
        classStyle="cal-button"
        func={() => sumData('*')}
      />
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
        func={() => sumData('/')}
      />
    </div>
  );
}
export default Cal;
