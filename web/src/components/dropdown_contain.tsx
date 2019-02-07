import * as React from 'react';

import { NavDropdown, MenuItem } from 'react-bootstrap';

interface Props {
  // isProjButtonClicked: boolean;
  currentProj: string;
  handler: (option: string, projData: any) => void;
}

export const DropdownContain = (props: Props) => {
  const placeholderOptions = ["test1", "test2"];
  const options = placeholderOptions.map(
    (option: string) =>
      <MenuItem
        className="dropdown-item"
        onClick={() => handleClick(option)}
      >
        {option}
      </MenuItem>,
  );

  const handleClick = async (name: string) => {
    try {
      const projData = await getProjData(name);
      props.handler(name, projData);
    } catch (error) {
      console.log('Error while handling project selection click');
    }
  };

  const getProjData = async (name: string) => {
    try {
      const SERVER_URL = process.env.SERVER_URL;
      const response = await fetch(`${SERVER_URL}/chooseProj?projName=${name}`);
      const projData = response.json();
      return projData;
    } catch (error) {
      console.log('Failed to get project Data');
      return {};
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
