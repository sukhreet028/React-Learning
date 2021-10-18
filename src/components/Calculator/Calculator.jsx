import './Cal.css';
import Input1 from '../input1-com/Input1';
import Buttons from '../buttons/buttons';
import { useEffect, useState } from 'react';

function Cal() {
  const [result, setResult] = useState(0);
  const [operator, setOperator] = useState();
  const buttonArray = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
  const operatorArray = ['+', '-', '*', '/'];
  const [inputValues, setInputValues] = useState([]);
  const [storeFirstValue, setStoreFirstValue] = useState();
  const [buttonId, setButtonId] = useState(null);
  let sum;

  const calcuFunction = (secondValue) => {
    if (operator === '+') {
      sum = (storeFirstValue ? storeFirstValue : 0) + secondValue;
    } else if (operator === '-') {
      sum = (storeFirstValue ? storeFirstValue : 0) - secondValue;
    } else if (operator === '*') {
      sum = (storeFirstValue ? storeFirstValue : 0) * secondValue;
    } else if (operator === '/') {
      sum = (storeFirstValue ? storeFirstValue : 0) / secondValue;
    } 
  }

  const sumData = (value, id) => {

    // if we are not using = button and continue with the other operator buttons
    if (operator && operatorArray.includes(value)) {
      setButtonId(id);
      calcuFunction(result);

      setStoreFirstValue(sum);
      setInputValues([]);
      setResult(sum);
      setOperator(value);
    } 
    // we are using to show the calculation result and this block of code is only gonna work if we have the value of operator
    else if (value === '=' && operator) {
      let storeSecondValue = parseInt(inputValues.join(''));
        if (storeSecondValue) {
          calcuFunction(storeSecondValue);
        } else {
          calcuFunction(0);
        }
      setResult(sum);
      setOperator(null);
      setStoreFirstValue(sum);
      setInputValues(sum.toString().split(','));
    } else if (operatorArray.includes(value) && !operator) {
      setButtonId(id);
      setOperator(value);
      if (inputValues.length > 0) {
        setStoreFirstValue(parseInt(inputValues.join('')));
      }
      setInputValues([]);

    } else {
      if (buttonArray.includes(value)) {
        setButtonId(null);
        inputValues.push(value);
        setInputValues((prev) => [...prev]);
        let keys = parseInt(inputValues.join(''));
        setResult(keys);
      }
    }
  };

  const clearFunction = () => {
    setInputValues([]);
    setResult(0);
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
      {operatorArray.map((data, index) => (
        <Buttons
          key={index}
          id={index}
          buttonType="button"
          name={data}
          classStyle="cal-button"
          buttonId={buttonId}
          func={() => sumData(data, index)}
        />
      ))}
      <Buttons
        buttonType="button"
        name="C"
        classStyle="cal-button"
        func={() => clearFunction()}
      />
    </div>
  );
}
export default Cal;