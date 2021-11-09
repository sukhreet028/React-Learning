import React from "react";
import { useParams } from "react-router-dom";
import BookInfo from "./BookInfo";
const OneBook = () => {
  let parms = useParams()?.id;
  let bookData;

  if (parms) {
    bookData = BookInfo.find((data) => data.id == parms);
  }
  const { id, Name, Author, Price, Type } = bookData;
  return (
    <div>
     <p> Book Id: {id}</p>
      <p> Name of Book is : {Name}</p>
      <p> Author of Book is : {Author}</p>
      <p> Price of Book is : {Price}</p>
      <p> Type of Book is : {Type}</p>
    </div>
  );
};
export default OneBook;
