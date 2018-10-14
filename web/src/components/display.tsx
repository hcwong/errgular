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
      <div className="display-container">
        {this.props.data.map(((element) => {
          <DisplayBox/>
        }))}     
      </div>
    );
  }
}