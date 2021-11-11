import React, { useState } from 'react';
import BookInfo from './BookInfo';
import { useParams } from 'react-router-dom';

function Page(props) {
  const [pageNo, setPageNo] = useState(0);
  const [disableNext, setDisableNext] = useState(false);
  const [disablePrev, setDisablePrev] = useState(true);
  const { id, title } = useParams();
  let pageNo1 = 0;

  let bookData;
  let chapterData;

  if (id) {
    bookData = BookInfo.find((data) => data.id == id);
  }
  const { chapters } = bookData;
  if (title) {
    chapterData = chapters.find((data) => data.title == title);
  }
  const { pages } = chapterData;
//   const pageArray = Object.keys(pages);
const pageValuesArray = Object.values(pages);

  const nextPage = () => {
    if (pageNo + 1 < pageValuesArray.length) {
        pageNo1 = pageNo1 + 1;
        console.log(pageNo1);
      setPageNo((prev) => {
        return prev + 1;
      });
      setDisablePrev(false);
      if(pageNo + 1 === pageValuesArray.length - 1) {
        setDisableNext(true);
      }
    }
  };

  const prevPage = () => {
    if (pageNo >= 0 ) {
        setPageNo((prev) => {
          return prev - 1;
        });
        setDisableNext(false);
        if(pageNo - 1 === 0) {
          setDisablePrev(true);
        }
      }
  }

  return (
    <div>
        <p>{pageNo1}</p>
      <p>{pageValuesArray[pageNo]}</p>
      <button className={disableNext && 'disableButton'} disabled={disableNext} type="button" onClick={nextPage}>
        nextpage
      </button>
      <button className={disablePrev && 'disableButton'} disabled={disablePrev} type="button" onClick={prevPage}>prevPage</button>
    </div>
  );
}

export default Page;
