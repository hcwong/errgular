import * as React from 'react';

import { Navbar as NavbarComponent, Nav, FormGroup, FormControl, Button } from 'react-bootstrap';
// import { SearchBar } from './search_bar';
import DropdownContainContainer from '../dropdown_contain_container'; // tslint:disable-line

interface Props {
  placeholder: string;
}

// tslint:disable-next-line
export const Navbar = () => {
  return (
    <NavbarComponent
      className="navbar navbar-fixed-top navbar-expand-lg bg-dark no-margins font-white">
      <NavbarComponent.Header>
        <NavbarComponent.Brand className="navbar-brand">
          <a>Errgular</a>
        </NavbarComponent.Brand>
      </NavbarComponent.Header>
      <NavbarComponent.Collapse>
        <Nav>
          <DropdownContainContainer/>
        </Nav>
        <Nav pullRight>
          <NavbarComponent.Form className="form-inline">
            <FormGroup>
              <FormControl type="text" placeholder="Search" />
            </FormGroup>{' '}
            <Button type="submit">Submit</Button>
          </NavbarComponent.Form>
        </Nav>
      </NavbarComponent.Collapse>
    </NavbarComponent>
  );
};
