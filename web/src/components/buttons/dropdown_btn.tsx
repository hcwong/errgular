import * as React from 'react';
import { DropdownBox } from '../dropdown_box';
const svgDown = require("./../../../img/arrow_down.svg");

interface Props {
  btnName: string;
}

export class DropdownBtn extends React.Component<Props, any> {
  constructor(props: Props) {
    super(props);
    this.dropDownHandler.bind(this);
    this.state = {clicked: false};
  }

  dropDownHandler() {
    const original = this.state.clicked;
    this.setState({clicked: !original})
  }

  render() {
    return(
      <div className="navbar-proj-name"
        onClick={() => this.dropDownHandler()}
      >
        {this.props.btnName}
        <img src={svgDown}/>
      </div>
    );
  }
};