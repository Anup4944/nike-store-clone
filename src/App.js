import React from "react";
import { Hero, Sales } from "./components";
import { heroApi, popularsales, toprateslaes } from "./data/data";

const App = () => {
  return (
    <>
      <main className="flex flex-col gap-16 relative">
        <Hero heroApi={heroApi} />
        <Sales endPoint={popularsales} ifExists />
        <Sales endPoint={toprateslaes} />
      </main>
    </>
  );
};

export default App;
