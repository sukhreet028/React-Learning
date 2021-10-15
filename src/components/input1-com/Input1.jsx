import { useState } from 'react';

function InputCom(props) {
  const { result } = props;
  const [inputValue, setInputValue] = useState('test here');
  const inputData = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <>
      {/* {' '} */}
      <input
        onChange={($event) => inputData($event)}
        value={result}
        className="inputClass"
        type="input"
      />{' '}
    </>
  );
    }
export default InputCom;

