import * as React from "react";
import {Navbar} from "./layout/navbar";

export class Home extends React.Component<{},{}> {
  render() {
    return(
      <Navbar
        btnName="Placeholder"
        placeholder="Search for your Project"
      />
    );
  }
};