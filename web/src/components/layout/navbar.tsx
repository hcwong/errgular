import * as React from 'react';

import { Navbar as NavbarComponent, Nav, NavDropdown } from 'react-bootstrap';
import { SearchBar } from './search_bar';
import DropdownContainContainer from '../dropdown_contain_container'; // tslint:disable-line

interface Props {
  placeholder: string;
}

// export class Navbar extends React.Component<Props, {}> {
//   constructor(props: Props) {
//     super(props);
//   }

//   render() {
//     return(
//       <nav className="navbar bg_dark_b">
//         <a className="navbar-brand navbar-brand:hover">
//           Errgular
//         </a>
//         <ul className="navbar-ul">
//           <DropdownContainContainer/>
//           <SearchBar
//             placeholder={this.props.placeholder}
//           />
//         </ul>
//       </nav>
//     );
//   }
// }

// tslint:disable-next-line
export const Navbar = () => {
  return (
    <NavbarComponent
      className="navbar navbar-fixed-top navbar-light bg-dark no-margins font-white">
      <NavbarComponent.Header>
        <NavbarComponent.Brand className="navbar-brand">
          <a>Errgular</a>
        </NavbarComponent.Brand>
      </NavbarComponent.Header>
      <Nav>
        <DropdownContainContainer/>
        <SearchBar
          placeholder="placeholder"
        />
      </Nav>
    </NavbarComponent>
  );
};
