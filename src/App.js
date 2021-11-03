import './App.css';
import Home from './components/Pages/Home';
import { Suspense } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Contact from './components/Pages/contact';
import List from './components/List-com/List2';
function App(props) {
  const listArray = [
    { name: 'Home', path: '/' },
    { name: 'Contact us', path: 'contact' },
  ];
  let routes = (
    <Routes>
      <Route path="/contact" element={<Contact {...props} />}>
        <Route path=":id" element={<Contact {...props} />} />
      </Route>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
  return (
    <div className="App">
      <List classType="small-nav" myBar={listArray} />
      <Suspense fallback={<p>loading ...</p>}>{routes}</Suspense>
    </div>
  );
}
export default App;
