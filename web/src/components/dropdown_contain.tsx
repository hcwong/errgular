import * as React from 'react'
import { DropdownBox } from './dropdown_box';
import { DropdownBtn } from './buttons/dropdown_btn';
import { runInThisContext } from 'vm';

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
        <div>
          <DropdownBtn
            btnName=""
            handler={this.dropDownHandler}
          />
          <DropdownBox
            options={["test", "test1"]}
          />
        </div>
      )
    } else {
      return (
        <div>
          <DropdownBtn
            btnName=""
            handler={this.dropDownHandler}
          />
        </div>
      )
    }
  }
}