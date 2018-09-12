import * as React from "react";
import {SearchBar} from './search_bar';
import {DropdownBtn} from './../buttons/dropdown_btn';

interface Props {
  btnName: string;
  placeholder: string;
}

export class Navbar extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }
  
  render() {
    return(
      <nav className="navbar">
        <a className="navbar-brand navbar-brand:hover">
          Errgular
        </a>
        <ul className="navbar-ul">
          <li className="navbar-li">
            <DropdownBtn
              btnName={this.props.btnName}
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