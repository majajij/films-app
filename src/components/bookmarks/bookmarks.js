import React from "react";
import classes from "./bookmarks.module.scss";
import Bookmark from "./bookmark/bookmark";

const BookMarks = (props) => {
  const bookmarks = props.filmsList
    .filter((e) => e.isFav)
    .map((e, i) => <Bookmark clickDelete={props.click} data={e} key={i} />);

  return <div className={classes.bookmarks}>{bookmarks}</div>;
};

export default BookMarks;
