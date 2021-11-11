import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import BookInfo from './BookInfo';
import { Link } from 'react-router-dom';
import './book.css';
const OneBook = () => {
  let parms = useParams()?.id;
  let title = useParams()?.title;
  let bookData;

  if (parms) {
    bookData = BookInfo.find((data) => data.id == parms);
  }
  const { id, Name, Author, Price, Type, chapters } = bookData;
  return (
    <div>
      {!title && (
        <>
          <p> Book Id: {id}</p>
          <p> Name of Book is : {Name}</p>
          <p> Author of Book is : {Author}</p>
          <p> Price of Book is : {Price}</p>
          <p> Type of Book is : {Type}</p>
          <p>Chapters :</p>
          {chapters.map((data, index) => (
            <div key={index} className="chap-container">
              <p>{data.title}</p>
              <p>{data.describe}</p>
              <p>{data.pageNumber}</p>
              <Link to={data.title}>read</Link>
            </div>
          ))}
        </>
      )}
      <Outlet />
    </div>
  );
};
export default OneBook;
