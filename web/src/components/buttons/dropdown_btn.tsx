import * as React from 'react';

interface Props {
  btnName: string;
}

export class DropdownBtn extends React.Component<Props,{}> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return(
      <div className="navbar-proj-name">
        {this.props.btnName}
        <img src="./../../../img/baseline/arrow_down.svg"/>
      </div>
    );
  }
};