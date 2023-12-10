import React from "react";
import "./App.css";

import { ComList } from "./components/FSidebar";
import { Header } from "./components/Header";
import { ComDetails } from "./components/SSidebar";

function App() {
  return (
      <div className="App">
        <Header />
        <div className="scroll__wrapper">
          <ComList />
          <ComDetails />
        </div>
      </div>
  );
}

export default App;
