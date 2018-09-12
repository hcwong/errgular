import * as React from "react";
import * as ReactDOM from "react-dom";

import {Home} from './home';

require("./../stylesheets/main.scss");

class Hello extends React.Component<{}, {}> {
  render() {
    return(
      <Home/>
    );
  }
}

const mountNode = document.getElementById("app");
ReactDOM.render(<Hello />, mountNode);