import React from "react";
import classes from "./bookmarks.module.scss";
import Bookmark from "./bookmark/bookmark";

const BookMarks = (props) => {
  return (
    <div className={classes.bookmarks}>
      <Bookmark />
    </div>
  );
};

export default BookMarks;
