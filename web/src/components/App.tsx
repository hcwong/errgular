import * as React from "react";
import * as ReactDOM from "react-dom";

import {Navbar} from './layout/navbar';

require("./../stylesheets/main.scss");

class Hello extends React.Component<{}, {}> {
  render() {
    return(
      <Navbar
      />
    );
  }
}

const mountNode = document.getElementById("app");
ReactDOM.render(<Hello />, mountNode);