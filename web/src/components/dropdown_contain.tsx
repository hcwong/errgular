import * as React from 'react'

import DropdownBoxContainer from "./dropdown_box_container";
import DropdownBtnContainer from "./buttons/dropdown_btn_container";

interface Props {
  currentProj: string;
  projHandler: any;
  isProjButtonClicked: boolean
}

export const DropdownContain = (props: Props) => {
  if (this.isProjButtonClicked) {
    return (
      <div className="pos_rel d_block">
        <DropdownBtnContainer/>
        <DropdownBoxContainer/>
      </div>
    )
  } else {
    return (
      <DropdownBtnContainer/>
    )
  }
};


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
//         <div className="pos_rel d_block">
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