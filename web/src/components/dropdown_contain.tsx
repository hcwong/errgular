import * as React from 'react'
import { DropdownBox } from './dropdown_box';
import { DropdownBtn } from './buttons/dropdown_btn';

interface State {
  clicked: boolean
}

interface Props {
  projHandler: any
}

export class DropdownContain extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {clicked: false};
    this.dropDownHandler = this.dropDownHandler.bind(this);
  }

  dropDownHandler() {
    console.log("clicked");
    if (this.state.clicked) {
      this.setState({clicked: false});
    } else {
      this.setState({clicked: true});
    } 
  }

  render() {
    if (this.state.clicked) {
      return (
        <div className="pos_rel d_block">
          <DropdownBtn
            btnName="Placeholder"
            handler={this.dropDownHandler}
          />
          <DropdownBox
            options={["test", "test1"]}
            projHandler={this.props.projHandler}
          />
        </div>
      )
    } else {
      return (
        <DropdownBtn
          btnName="Placeholder"
          handler={this.dropDownHandler}
        />
      )
    }
  }
}