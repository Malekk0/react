import React, { Component } from "react";
import "./App.css";
import logo from "./logo.svg";
import body from "./components/Body/body";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Body from "./components/Body/body";

class App extends Component {
  render() {
    return (
      <div>
        <Header logo={logo} header="НАЗВАНИЕ САЙТА" />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
