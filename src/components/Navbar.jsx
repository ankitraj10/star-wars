import React, { Component } from "react";
import "../styles/styles.css";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand navbar-title" href="#">
            SWAPI
          </a>
        </nav>
      </div>
    );
  }
}

export default Navbar;
