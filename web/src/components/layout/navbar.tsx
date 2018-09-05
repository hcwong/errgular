import * as React from "react";

export class Navbar extends React.Component<{}, {}> {
  render() {
    return(
      <nav className="navbar">
        <a className="navbar-brand navbar-brand:hover">
          Errgular
        </a>
        <ul className="navbar-ul">
          <li className="navbar-li">
            <div className="navbar-proj-name">
              Placeholder Project
              <img src="./../../../img/baseline/arrow_down.svg"/>
            </div>
          </li>
        </ul>
      </nav>
    );
  }
}