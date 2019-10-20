import React from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";

import { BrowserRouter, Route } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <div className="d-flex align-items-center">
      <BrowserRouter>
        <Nav />
        <Route path={"/inicio"} component={Home} />
      </BrowserRouter>
    </div>
  );
}

export default App;
