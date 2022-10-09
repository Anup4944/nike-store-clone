import React from "react";
import { Hero } from "./components";
import { heroApi } from "./data/data";

const App = () => {
  return (
    <>
      <main>
        <Hero heroApi={heroApi} />
      </main>
    </>
  );
};

export default App;
