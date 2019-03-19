import React from "react";
import Advertising from "./Advertising";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center"
          }}
        >
          <Advertising
            text="Реклама "
            link="https://fainaidea.com/wp-content/uploads/2017/07/maxresdefault-5.jpg"
          />
          <Advertising
            className="text"
            text="Реклама "
            link="https://b1.vestifinance.ru/c/341699.742xp.jpg"
          />
          <Advertising
            text="Реклама "
            link="https://mcgrp.ru/img/2017_04/img_1004737.jpg"
          />
        </div>
      </footer>
    );
  }
}

export default Footer;
