import * as React from "react";

import {Navbar} from "./layout/navbar";
import {Body} from "./body";

export class Home extends React.Component<{},{}> {
  constructor() {
    super({}, {});
    this.getProjData = this.getProjData.bind(this);
  }

  // NOTE: Might want to check whether the Component has mounted then call the api

  // WIP: To remove this once redux is added
  getProjData(name: string) {
    // WIP: Update the url
    const data = fetch("placeholder",
                    {
                      method: "POST",
                      body: JSON.stringify({name: name})
                    })
                  .then((res) => {
                    return res.json()
                  })
                  .catch((err) => {
                    console.log("Error while getting project data");
                  });
    if (data !== undefined) {
      // WIP: change the button name and modify the body's contents with redux
    }
  }

  render() {
    return(
      <div className="d_flex_c">
        <Navbar
          btnName="Placeholder"
          placeholder="Search for your Project"
          projHandler={this.getProjData}
        />
        <Body
          data={[]}
        />
      </div>
    );
  }
};