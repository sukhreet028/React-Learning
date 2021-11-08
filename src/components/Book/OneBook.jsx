import React from "react";
const OneBook = (prop) => {
  const { id, name, author, cost, type } = prop;
  return (
    <div>
     <p> Book Id: {id}</p>
      <p> Name of Book is : {name}</p>
      <p> Author of Book is : {author}</p>
      <p> Price of Book is : {cost}</p>
      <p> Type of Book is : {type}</p>
    </div>
  );
};
export default OneBook;
