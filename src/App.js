import React from "react";

import VendingMachine from "./VendingMachine";
import Apple from "./Apple";
import Chips from "./Chips";
import Soda from "./Soda";
import NavBar from "./NavBar";

import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      < NavBar />
        <Route exact path="/apple">
          <Apple />
        </Route>
        <Route exact path="/chips">
          <Chips />
        </Route>
        <Route exact path="/soda">
          <Soda />
        </Route>
        <Route exact path="/">
          <VendingMachine />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
