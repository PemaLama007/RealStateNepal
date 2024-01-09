import React from "react";
import Header from "./Comp/Header/Header";
import Cat from "./Catgory/Cat";
import "./App.css";
import Companies from "./Companies/Companies";
import Residencies from "./Comp/Residencies/Residencies";
import Value from "./Comp/Values/Value";
import Contact from "./Comp/Contact/Contact";
import GetStart from "./Comp/GetStart/GetStart";
import Footer from "./Comp/Footer/Footer";
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"></div>
        <Header />
        <Cat />
      </div>
      <Companies />
      <Residencies />
      <Value />
      <Contact />
      <GetStart />
      <Footer />
    </div>
  );
}

export default App;
