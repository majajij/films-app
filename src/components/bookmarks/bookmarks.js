import React from "react";
import classes from "./bookmarks.module.scss";
import Bookmark from "./bookmark/bookmark";

const BookMarks = (props) => {
  const bookmarks = props.filmsList.map((e, i) => (
    <Bookmark data={e} key={i} />
  ));

  return <div className={classes.bookmarks}>{bookmarks}</div>;
};

export default BookMarks;
