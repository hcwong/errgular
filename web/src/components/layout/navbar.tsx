import * as React from "react";
import {SearchBar} from './search_bar';
import { DropdownContain } from "../dropdown_contain";

interface Props {
  btnName: string;
  placeholder: string;
  projHandler: any;
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
            <DropdownContain
              projHandler={this.props.projHandler}
            />
          </li>
          <SearchBar
            placeholder={this.props.placeholder}
          />
        </ul>
      </nav>
    );
  }
};