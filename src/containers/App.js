import React from "react";
import calsses from "./App.module.scss";
import Header from "../components/header/header";

function App() {
  return (
    <div className={calsses.App}>
      <Header />
    </div>
  );
}

export default App;
