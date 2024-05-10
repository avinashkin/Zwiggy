import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import data from "./utils/mockData";


const AppLayout = () => {

  return (
    <div className="app">
      <Header />
      <Body data={data} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
