import { useEffect, useState } from 'react';

function InputCom(props) {
  const { result } = props;
  const [inputValue, setInputValue] = useState('test here');
  const inputData = (event) => {
    setInputValue(event.target.value);
  };
  useEffect(()=> {
    setInputValue(result);
  },[result]);
  return (
    <>
      {/* {' '} */}
      <input
        onChange={($event) => inputData($event)}
        value={inputValue}
        className="inputClass"
        type="input"
      />{' '}
    </>
  );
    }
export default InputCom;

