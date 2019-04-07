import * as React from 'react';

import {
  Navbar as NavbarComponent,
  Nav,
  FormGroup,
  FormControl,
  Form,
  Button,
} from 'react-bootstrap';

  import DropdownContainContainer from '../dropdown_contain_container'; // tslint:disable-line

interface Props {
  placeholder: string;
}

// tslint:disable-next-line
export const Navbar = () => {
  return (
    <NavbarComponent
      bg="light"
      variant="light"
    >
      <NavbarComponent.Brand className="navbar-brand">
        <a>Errgular</a>
      </NavbarComponent.Brand>
      <NavbarComponent.Collapse>
      <Nav className="mr-auto">
        <DropdownContainContainer/>
      </Nav>
      <Form inline justify-content-end>
        <FormGroup>
          <FormControl type="text" placeholder="Search" />
        </FormGroup>{' '}
        <Button type="submit">Submit</Button>
      </Form>
      </NavbarComponent.Collapse>
    </NavbarComponent>
  );
};
