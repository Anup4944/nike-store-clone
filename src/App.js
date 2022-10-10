import React from "react";
import { FlexContent, Hero, Sales } from "./components";
import {
  heroApi,
  popularsales,
  toprateslaes,
  highlight,
  sneaker,
} from "./data/data";

const App = () => {
  return (
    <>
      <main className="flex flex-col gap-16 relative">
        <Hero heroApi={heroApi} />
        <Sales endPoint={popularsales} ifExists />
        <FlexContent endPoint={sneaker} ifExists />
        <Sales endPoint={toprateslaes} />
        <FlexContent endPoint={highlight} />
      </main>
    </>
  );
};

export default App;
