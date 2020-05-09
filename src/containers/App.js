import React from "react";
import calsses from "./App.module.scss";
import Header from "../components/header/header";
import Bookmarks from "../components/bookmarks/bookmarks";
import Shell from "../components/shell/shell";

function App() {
  return (
    <div className={calsses.App}>
      <Header />
      <Shell/>
      <Bookmarks/>
    </div>
  );
}

export default App;
