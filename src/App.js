import "./App.css";
import Home from "./components/Pages/Home";
import { Suspense } from "react";
import { Route, Routes, Switch } from "react-router-dom";
import Contact from "./components/Pages/contact";
import List from "./components/List-com/List2";
import BookInfo from "./components/Book/BookInfo";
import About from "./components/About-us/About";
import Error from "./components/ErrorPage/Error";

function App(props) {
  const myList = [
    { name: "Home", path: "/" },
    { name: "Contact us", path: "contact" },
    { name: "Book Info", path: "book" },
    { name: "About Us", path: "about" },
    { name: "Blog", path: "blog" },
  ];
  let routes = (
    <Routes>
      {/* <Route exact path="/book" element={<BookInfo />}>
        <Route path="/book/:id" element={<BookInfo />} />
      </Route> */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* <Route element={<Error />} /> */}
      <Route path="*" element={<Error />} />
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
