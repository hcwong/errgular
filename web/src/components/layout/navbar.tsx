import * as React from "react";
import {SearchBar} from './search_bar';
import DropdownContainContainer from "../dropdown_contain_container";

interface Props {
  placeholder: string;
}

export class Navbar extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return(
      <nav className="navbar bg_dark_b">
        <a className="navbar-brand navbar-brand:hover">
          Errgular
        </a>
        <ul className="navbar-ul">
          <li className="navbar-li">
            <DropdownContainContainer/>
          </li>
          <SearchBar
            placeholder={this.props.placeholder}
          />
        </ul>
      </nav>
    );
  }
};