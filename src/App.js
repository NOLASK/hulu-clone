import React, { useState } from "react";
import "./App.css";

//components
import Header from "./components/header/Header";
import Nav from "./components/navbar/Nav";
import Results from "./components/results/Results";

//Request DATA from TheMDB
import requests from "./components/requests/requests";

function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);

  return (
    <div className="App">
      <Header />

      <Nav setSelectedOption={setSelectedOption} />

      <Results selectedOption={selectedOption} />
    </div>
  );
}

export default App;
