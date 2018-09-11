import * as React from "react";
import {SearchBar} from './search_bar';

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
          <SearchBar
            placeholder= "Search for your Project"
          />
        </ul>
      </nav>
    );
  }
}