import React from "react";
import QuoteComponent from "./components/QuoteComponent";
import "./App.css";

function App() {
  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
      <h1 className="title m-5">Random Quote</h1>
      <QuoteComponent />
    </div>
  );
}

export default App;
