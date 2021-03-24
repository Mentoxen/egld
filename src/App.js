import React from "react";
import {ScrollingProvider} from "react-scroll-section";
import Header from "./components/Header";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Separator from "./components/sections/Separator";
import Statistics from "./components/sections/Statistics";
import Reasons from "./components/sections/Reasons";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <ScrollingProvider>
      <Header/>
      <Hero/>
      <About/>
      <Separator/>
      <Statistics/>
      <Reasons/>
      <Contact/>
    </ScrollingProvider>
  );
}

export default App;
