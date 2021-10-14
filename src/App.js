import './App.css';
import Mywork from './components/Mywork/Mywork';
import Home from './components/Pages/Home';
import Binding from './components/Mywork/Binding';
import Para from './components/Mywork/Para';
// import Mywork from './components/Mywork/Mywork';
function App() {
  const mycolor=['skyblue',];
  const num=7;
  return (
    <div className="App">
      {/* <Home /> */}
      <Mywork rang={mycolor}/>
      <Binding/>
      <Para Numbers={num}/>
    </div>
  );
}
export default App;
