import Demo from '../Demo/Demo';
import List from '../List-com/List';
import Head from '../Head-com/Head';
import Footer from '../footer/footer';
import Input from '../input-com/input';
import Buttons from '../buttons/buttons';
import { useState } from 'react';

function Home() {
  const colorHeading = ['red', 'green', 'pink'];
  const colorHeading2 = ['yellow', 'blue', 'gray', 'orange'];
  let printNumber = 4;
  const navData = ['Home', 'Blog', 'About', 'Call Us'];
  const navData1 = ['Find us', 'Contact us'];
  const [result, setResult] = useState(0);
  const buttonArray = [0,1,2,3];
  const  [first,setFirst] = useState([]);
  const  [storeFirstValue , setStoreFirstValue] = useState();
  
  const sumData = (value) => {
    if(value === 'sum') {
      let storeSecondValue = parseInt(first.join(''));
      let sum = (storeFirstValue ? storeFirstValue : 0) + storeSecondValue;
      console.log(storeFirstValue, storeSecondValue);
      setResult(sum);
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
  };

  return (
    <>
      <List navData={navData} classType="main-nav" />
      {printNumber === 3 && (
        <Head printNumbers={printNumber} color={colorHeading} />
      )}
      <Input result={result} />
      {buttonArray.map((data) =>(<Buttons
        key={data}
        buttonType="button"
        name={data}
        classStyle="simple-button"
        func={()=>sumData(data)}
      />))}
       <Buttons
        buttonType="button"
        name="+"
        classStyle="simple-button"
        func={()=>sumData('+')}
      />
       <Buttons
        buttonType="button"
        name="sum"
        classStyle="simple-button"
        func={()=>sumData('sum')}
      />
      <Head
        printNumbers={printNumber === 4 ? printNumber : 0}
        colors={printNumber === 4 && colorHeading2}
      />
      <List navData={navData1} classType="small-nav" />
      <Demo />
      <Footer />
    </>
  );
}
export default Home;
