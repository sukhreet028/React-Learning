import React from "react";
import { useParams } from "react-router-dom";
import BookInfo from "./BookInfo";
import OneBook from "./OneBook";

const BookDisplay = (prop) => {
  let parms = useParams()?.id;
  let bookData;

  if (parms) {
    bookData = BookInfo.find((data) => data.id == parms);
  }

  return (
    <div>
      <h1> Book Information</h1>
      {!parms &&
        BookInfo.map((data, index) => (
          <Link key={index} to={`/book/${data.id}`}>
            <div>
              <p>Book id: {data.id}</p>
              <p>Book Name is: {data.name}</p>
            </div>
          </Link>
        ))}
      {parms && (
        <OneBook
          id={bookData.id}
          name={bookData.name}
          author={bookData.author}
          price={bookData.price}
          type={bookData.type}
        />
      )}
    </div>
  );
};
export default BookDisplay;
