import "./App.css";
import Home from "./components/Pages/Home";
import { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Contact from "./components/Pages/contact";
import List from "./components/List-com/List2";
import BookDisplay from "./components/Book/BookDisplay";
import OneBook from "./components/Book/OneBook";
import About from "./components/About-us/About";
import Page  from './components/Book/page';
import Error from "./components/ErrorPage/Error";

function App(props) {
  const myList = [
    { name: "Home", path: "/home" },
    { name: "Contact us", path: "contact" },
    { name: "Book Info", path: "book" },
    { name: "About Us", path: "about" },
    { name: "Blog", path: "blog" },
  ];
  let routes = (
    <Routes>
      <Route path="/book" element={<BookDisplay />}>
       <Route path=":id" element={<OneBook />} >
         <Route path=":title" element={<Page />} />
       </Route>
      </Route>
        {/* <Route path="/" element={<Navigate to="/home" />} /> */}
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* <Route element={<Error />} /> */}
      {/* <Route path="*" element={<Error />} /> */}
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );

  return (
    <div className="App">
      <List classType="small-nav" myBar={myList} />
      <Suspense fallback={<p>Please Wait Data is Loading ...</p>}>
        {routes}
      </Suspense>
    </div>
  );
}
export default App;
