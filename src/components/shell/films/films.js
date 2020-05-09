import React from "react";
import classes from "./films.module.scss";
import Film from "./film/film";

const Films = () => {
  return (
    <div className={classes.films}>
      <Film />
    </div>
  );
};

export default Films;
