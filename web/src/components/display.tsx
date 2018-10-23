import * as React from "react";
import {DisplayBox} from "./displaybox";

interface Props {
  data: Array<string>,
}

export class Display extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return(
      <div className="grid-container two-by-two">
        <DisplayBox
          section=".top-right"
        />
        <DisplayBox
          section=".top-left"
        />
        <DisplayBox
          section=".bottom-left"
        />
        <DisplayBox
          section=".bottom-right"
        />
      </div>
    );
  }
}