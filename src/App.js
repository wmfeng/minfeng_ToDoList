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
import StateDemo from "./pages/zhufeng/StateDemo";
import UnControlledDemo from "./pages/zhufeng/UnControlledDemo";
import PortalsDemo from "./pages/zhufeng/PortalsDemo";
import ContextDemo from "./pages/zhufeng/ContextDemo";
import LazyDemo from "./pages/zhufeng/LazyDemo";
import SeoDemo from "./pages/zhufeng/SeoDemo";
import PropsDemo from "./pages/zhufeng/PropsDemo";
import SeoDemo2 from "./pages/zhufeng/SeoDemo2";
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
            <Route path="/statedemo" exact component={StateDemo} />
            <Route path="/uncontrolleddemo" exact component={UnControlledDemo} />
            <Route path="/portalsdemo" exact component={PortalsDemo} />
            <Route path="/contextdemo" exact component={ContextDemo} />
            <Route path="/lazydemo" exact component={LazyDemo} />
            <Route path="/seodemo" exact component={SeoDemo} />
            <Route path="/propsdemo" exact component={PropsDemo} />
            <Route path="/seodemo2" exact component={SeoDemo2} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
