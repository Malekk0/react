import React from "react";
import Link from "./link";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="header-logo">
          <img src={this.props.logo} alt="Logo" />
        </div>
        <div className="header-nav">
          <h2>{this.props.header}</h2>
          <nav className="nav">
            <Link name="Home" href="" />
            <Link name="About" href="" />
            <Link name="Another link" href="" />
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
