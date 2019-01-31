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
      </MenuItem>
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
      const response = await fetch(`${placeholderUrl}/chooseProj?projName=${name}`);
      const projData = response.json();
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

// export const DropdownContain = (props: Props) => {
//   if (props.isProjButtonClicked) {
//     return (
//         <DropdownBtnContainer/>
//         <DropdownBoxContainer/>
//       </div>
//     )
//   } else {
//     return (
//       <DropdownBtnContainer/>
//     )
//   }
// };


// export class DropdownContain extends React.Component<Props, State> {
//   constructor(props: Props) {
//     super(props);
//     this.state = {clicked: false};
//     this.dropDownHandler = this.dropDownHandler.bind(this);
//   }

//   dropDownHandler() {
//     console.log("clicked");
//     if (this.state.clicked) {
//       this.setState({clicked: false});
//     } else {
//       this.setState({clicked: true});
//     } 
//   }

//   render() {
//     if (this.state.clicked) {
//       return (
//           <DropdownBtn
//             btnName={this.props.currentProj}
//             handler="place function here"
//           />
//           <DropdownBox
//             options={["test", "test1"]}
//             projHandler={this.props.projHandler}
//           />
//         </div>
//       )
//     } else {
//       return (
//         <DropdownBtn
//           btnName={this.props.currentProj}
//           handler="place function here"
//         />
//       )
//     }
//   }
// }
