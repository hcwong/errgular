import * as React from 'react';
import { DropdownBox } from '../dropdown_box';
const svgDown = require("./../../../img/arrow_down.svg");

interface Props {
  btnName: string;
  handler: any
}

export class DropdownBtn extends React.Component<Props, any> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return(
      <div className="navbar-proj-name bor_1_ff"
        onClick={() => this.props.handler()}
      >
        {this.props.btnName}
        <img src={svgDown}/>
      </div>
    );
  }
};