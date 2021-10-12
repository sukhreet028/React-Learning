import { useState } from "react";

function InputCom() {
    const [inputValue, setInputValue] = useState('test here');
    const inputData = (event) => {
        setInputValue(event.target.value);
    }
  return <> <p> valye is : </p>{ inputValue }
  <input onChange = {($event)=> inputData($event)}
  value={inputValue}
  style={{ transform: 'translate(200px,20px)' }} type="input" /> </>;
}

export default InputCom;
