import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import store from "./store";
import Header from "./components/header/index.jsx";
import Home from "./pages/home";
import Download from "./pages/download";
import Write from "./pages/write";
import Login from "./pages/login";

// ToDoList
import ToDoListOne from "./pages/toDoList/one/index.jsx";
import HooksDemo from "./pages/toDoList/one/HooksDemo.jsx";
import ToDoListTwo from "./pages/toDoList/two/index.jsx";

// ZhuFeng
import EventDemo from "./pages/zhufeng/EventDemo";
import FormDemo from "./pages/zhufeng/FormDemo";
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

            {/* ToDoList */}
            <Route path="/todolistone" exact component={ToDoListOne} />
            <Route path="/hooksdemo" exact component={HooksDemo} />
            <Route path="/todolisttwo" exact component={ToDoListTwo} />

            {/* ZhuFeng */}
            <Route path="/eventdemo" exact component={EventDemo} />
            <Route path="/formdemo" exact component={FormDemo} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
