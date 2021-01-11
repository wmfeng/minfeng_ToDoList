import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import store from "./store";
import Header from "./components/header/index.jsx";
import Home from "./pages/home";
import Download from "./pages/download";
import Write from "./pages/write";
import Login from "./pages/login";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={Home} />
            <Route path="/download" exact component={Download} />
            <Route path="/write" exact component={Write} />
            <Route path="/login" exact component={Login} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
