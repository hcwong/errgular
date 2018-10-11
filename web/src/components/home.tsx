import * as React from "react";
import {Navbar} from "./layout/navbar";

export class Home extends React.Component<{},{}> {
// NOTE: Might want to check whether the Component has mounted then call the api
  render() {
    return(
      <Navbar
        btnName="Placeholder"
        placeholder="Search for your Project"
      />
    );
  }
};