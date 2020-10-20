import React from "react";

import { Home, Navbar } from "./components"; // why adding a package.json to components doesnt work?
import "./app.css";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
