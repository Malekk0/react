import React, { Component } from "react";
import "./App.css";
import logo from "./logo.svg";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header logo={logo} header="НАЗВАНИЕ САЙТА" />
        <Footer />
      </div>
    );
  }
}

export default App;
