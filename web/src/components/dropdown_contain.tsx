import * as React from 'react';
import { NavDropdown, MenuItem } from 'react-bootstrap';

interface Props {
  currentProj: string;
  handler: (option: string) => void;
}

export const DropdownContain = (props: Props) => {
  const placeholderOptions = ['error1', 'error2']; // hardcoded values
  const options = placeholderOptions.map(
    (option: string) =>
      <MenuItem
        className="dropdown-item"
        onClick={() => handleClick(option)}
      >
        {option}
      </MenuItem>,
  );

  const handleClick = (name: string) => {
    try {
      props.handler(name);
    } catch (error) {
      console.log(error);
      console.log('Error while handling project selection click');
    }
  };

  return (
    <NavDropdown
      title = {props.currentProj}
      id="basic-nav-dropdown"
      className="nav-item dropdown"
      eventKey={1}
    >
      {options}
    </NavDropdown>
  );
};
