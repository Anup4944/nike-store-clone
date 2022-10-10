import React from "react";
import {
  FlexContent,
  Hero,
  Sales,
  Stories,
  Footer,
  Navbar,
} from "./components";
import {
  heroApi,
  popularsales,
  toprateslaes,
  highlight,
  sneaker,
  story,
  footerAPI,
} from "./data/data";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col gap-16 relative">
        <Hero heroApi={heroApi} />
        <Sales endPoint={popularsales} ifExists />
        <FlexContent endPoint={sneaker} ifExists />
        <Sales endPoint={toprateslaes} />
        <FlexContent endPoint={highlight} />
        <Stories story={story} />
      </main>
      <Footer footerAPI={footerAPI} />
    </>
  );
};

export default App;
