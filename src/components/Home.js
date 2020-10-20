import React from "react";
import { Typewriter } from "./";

const Home = () => {
  const greetings = ["Hi, there! This is", "Hola! Me llamo"];

  return (
    <div className="container">
      <Typewriter>{greetings}</Typewriter>
      <h1>Vanessa Pacheco</h1>
      <h2>Cool text here</h2>
      <p>I'm a software engineer based in Cartagena, Colombia.</p>
    </div>
  );
};

export default Home;
