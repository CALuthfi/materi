import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./mapel/composing-components/navbar/navbar";
import Counters from "./mapel/composing-components/Removing-the-Local-State/counters";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <main className="container">
          <Counters />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
