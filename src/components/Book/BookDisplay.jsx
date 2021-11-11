import React from "react";
import BookInfo from "./BookInfo";
import { Link, Outlet, useParams, useNavigate } from 'react-router-dom';

const BookDisplay = (prop) => {
  const param = useParams()?.id;
  const navigatePage = useNavigate();
  return (
    <div>
      <h1> Book Information</h1>
      {!param && BookInfo.map((data, index) => (
          <Link key={index} to={`/book/${data.id}`}>
            <div>
              <p>Book id: {data.id}</p>
              <p>Book Name is: {data.Name}</p>
            </div>
          </Link>
        ))}
        <Outlet />
        <button onClick={()=>navigatePage(-1)}>
          back
        </button>
        <button onClick={()=>navigatePage(+1)}>
          next
        </button>
    </div>
  );
};
export default BookDisplay;
