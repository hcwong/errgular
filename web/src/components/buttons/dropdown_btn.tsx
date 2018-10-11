import * as React from 'react';

interface Props {
  btnName: string;
}

export class DropdownBtn extends React.Component<Props,{}> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const svgDown = require("svg-inline-loader?classPrefix!./../../../img/arrow_down.svg");
    return(
      <div className="navbar-proj-name">
        {this.props.btnName}
        <img src={svgDown}/>
      </div>
    );
  }
};