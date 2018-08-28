import * as React from "react";
import * as ReactDOM from "react-dom";

require("./../stylesheets/main.scss");

class Hello extends React.Component<{}, {}> {
  render() {
    // Temp placeholder
    return <h1>Hello there</h1>;
  }
}

const mountNode = document.getElementById("app");
ReactDOM.render(<Hello />, mountNode);