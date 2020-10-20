import React from "react";

import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar v-navbar">
      <a href="/">{`<V />`}</a>
      <div>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#work">Work</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
