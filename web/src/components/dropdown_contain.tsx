import * as React from 'react'
import { DropdownBox } from './dropdown_box';
import { DropdownBtn } from './buttons/dropdown_btn';

interface State {
  clicked: boolean
}

export class DropdownContain extends React.Component<{}, State> {
  constructor() {
    super({});
    this.state = {clicked: false};
    this.dropDownHandler = this.dropDownHandler.bind(this);
  }

  dropDownHandler() {
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