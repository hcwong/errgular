import * as React from "react";
import {Navbar} from "./layout/navbar";
import {Body} from "./body";

export class Home extends React.Component<{},{}> {
// NOTE: Might want to check whether the Component has mounted then call the api
  render() {
    return(
      <div>
        <Navbar
          btnName="Placeholder"
          placeholder="Search for your Project"
        />
        <Body/>
      </div>
    );
  }
};