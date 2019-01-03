import * as React from 'react';

import { Navbar as NavbarComponent } from 'react-bootstrap';
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
    <NavbarComponent className="navbar">
      <NavbarComponent.Header>
        <NavbarComponent.Brand>
          <a>React-Bootstrap</a>
        </NavbarComponent.Brand>
      </NavbarComponent.Header>
    </NavbarComponent>
  );
};
