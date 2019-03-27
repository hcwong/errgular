// @flow
import * as React from 'react';

import { 
  Navbar, 
  NavbarBrand, 
  Nav,
  Form, 
  FormGroup, 
  FormControl, 
  Button
} from 'react-bootstrap';
import DropdownContainContainer from '../dropdown_contain_container'; 

export const NavbarContainer = () => {
  return (
    <Navbar
      className="navbar navbar-fixed-top navbar-expand-lg bg-dark no-margins font-white">
      <NavbarBrand className="navbar-brand">
        <a>Errgular</a>
      </NavbarBrand>
      <Nav>
        <DropdownContainContainer/>
      </Nav>
      <Nav pullRight>
        <Form className="form-inline">
          <FormGroup>
            <FormControl type="text" placeholder="Search" />
          </FormGroup>{' '}
          <Button type="submit">Submit</Button>
        </Form>
      </Nav>
    </Navbar>
  );
};
