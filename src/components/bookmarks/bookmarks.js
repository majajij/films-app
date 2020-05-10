import React from "react";
import classes from "./bookmarks.module.scss";
import Bookmark from "./bookmark/bookmark";
import DATA from "../../FakeDb/data"

const BookMarks = (props) => {

  const bookmarks = DATA.filter(e=>e.isFav).map((e,i) =>  <Bookmark data={e} key={i}/>)
  
  return (
    <div className={classes.bookmarks}>
      {bookmarks}
    </div>
  );
};

export default BookMarks;
