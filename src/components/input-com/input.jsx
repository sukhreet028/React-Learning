import { useState } from 'react';

function InputCom(props) {
  const { result } = props;
  const [inputValue, setInputValue] = useState('test here');
  const inputData = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <>
      {' '}
      <p> valye is : {result}</p>
      <input
        onChange={($event) => inputData($event)}
        value={result}
        style={{ transform: 'translate(200px,20px)' }}
        type="input"
      />{' '}
    </>
  );
}

export default InputCom;
