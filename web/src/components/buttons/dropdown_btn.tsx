import * as React from 'react';
// const svgDown = require("./../../../img/arrow_down.svg");
const svgDown = require("./../../../img/arrow_down.svg");

interface Props {
  btnName: string;
}

export class DropdownBtn extends React.Component<Props,{}> {
  constructor(props: Props) {
    super(props);
    this.dropDownHandler.bind(this);
    this.setState({clicked: false});
  }

  dropDownHandler() {
    console.log("clicked");
    this.setState({clicked: true})
  }

  render() {
    // const svgDown = require("svg-inline-loader?classPrefix!./../../../img/arrow_down.svg");
    return(
      <div className="navbar-proj-name"
        onClick={() => this.dropDownHandler()}
      >
        {this.props.btnName}
        <img src={svgDown}/>
        {/* <span dangerouslySetInnerHTML={{__html: svgDown}}/> */}
      </div>
    );
  }
};