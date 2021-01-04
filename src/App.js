import React, { Component } from "react";
import Header from "./common/header/index.jsx";
import Home from "./home";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
      </div>
    );
  }
}

export default App;
