import Demo from '../Demo/Demo';
import List from '../List-com/List';
import Head from '../Head-com/Head';
import Footer from '../footer/footer';
import Input from '../input-com/input';
function Home() {
  const colorHeading = ['red', 'green', 'pink'];
  const colorHeading2 = ['yellow', 'blue', 'gray', 'orange'];
  let printNumber = 4;
  const navData = ['Home', 'Blog', 'About', 'Call Us'];
  const navData1 = ['Find us', 'Contact us'];
  return (
    <>
      <List navData={navData} classType="main-nav" />
      {printNumber === 3 && (
        <Head printNumbers={printNumber} colors={colorHeading} />
      )}
      <Input />
      <Head
        printNumbers={printNumber === 4 ? printNumber : 0}
        colors={printNumber === 4 && colorHeading2}
      />
      <List navData={navData1} classType="small-nav"/>
      <Demo />
      <Footer />
    </>
  );
}
export default Home;
