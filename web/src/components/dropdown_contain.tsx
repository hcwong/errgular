import * as React from 'react'

// import DropdownBoxContainer from "./dropdown_box_container";
// import DropdownBtnContainer from "./buttons/dropdown_btn_container";
import { NavDropdown, MenuItem } from 'react-bootstrap';

interface Props {
  // isProjButtonClicked: boolean;
  currentProj: string;
  handler: (option: string, projData: any) => void;
}

export const DropdownContain = (props: Props) => {
  const placeholderOptions = ["test1", "test2"];
  const placeholderUrl = "http://localhost";
  const options = placeholderOptions.map(
    (option: string) =>
      <MenuItem
        className="dropdown-item"
        onClick={() => handleClick(option)}
      >
        {option}
      </MenuItem>,
  );

  // WIP
  const handleClick = async (name: string) => {
    try {

    } catch (error) {

    }
    const projData = await getProjData(name);
    // WIP: Change the action
    props.handler(name, projData);
  };

  // WIP
  const getProjData = async (name: string) => {
    try {
      // const response = await fetch(`${placeholderUrl}/chooseProj?projName=${name}`);
      // const projData = response.json();
      // WIP: dummy data to change once the server is up and running
      const projData = {testing: "testing"};
      return projData;
    } catch (error) {
      console.log("Failed to get project Data");
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
