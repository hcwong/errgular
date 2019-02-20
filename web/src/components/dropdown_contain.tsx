import * as React from 'react';

import { NavDropdown, MenuItem } from 'react-bootstrap';

interface Props {
  // isProjButtonClicked: boolean;
  currentProj: string;
  handler: (option: string, projData: any) => void;
}

export const DropdownContain = (props: Props) => {
  const placeholderOptions = ["error1", "error2"]; // hardcoded values
  const options = placeholderOptions.map(
    (option: string) =>
      <MenuItem
        className="dropdown-item"
        onClick={() => handleClick(option)}
      >
        {option}
      </MenuItem>,
  );

  // TODO: Might also want to refactor
  const handleClick = async (name: string) => {
    try {
      const projData = await getProjData(name);
      props.handler(name, projData);
    } catch (error) {
      console.log('Error while handling project selection click');
    }
  };

  // TODO: Refactor out of this component
  const getProjData = async (name: string) => {
    try {
      const SERVER_URL = process.env.SERVER_URL;
      const response = await fetch(`http://${SERVER_URL}/proj?projName=${name}`);
      const projData = response.json();
      console.log(projData);
      return projData;
    } catch (error) {
      console.log(error);
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
