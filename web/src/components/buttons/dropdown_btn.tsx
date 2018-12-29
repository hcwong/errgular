import * as React from 'react';
import { store } from '../../store';

const svgDown = require("./../../../img/arrow_down.svg");

interface Props {
  btnName: string;
  handler: any
}

export const DropdownBtn = (props: Props) => {
  return (
    <div className="navbar-proj-name bor_1_ff"
      onClick={() => {console.log(store.getState());props.handler()}}
    >
      {props.btnName}
      <img src={svgDown}/>
    </div>
  )
}

// export class DropdownBtn extends React.Component<Props, any> {
//   constructor(props: Props) {
//     super(props);
//   }

//   render() {
//     return(
//       <div className="navbar-proj-name bor_1_ff"
//         onClick={() => this.props.handler()}
//       >
//         {this.props.btnName}
//         <img src={svgDown}/>
//       </div>
//     );
//   }
// };
