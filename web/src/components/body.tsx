import * as React from "react";
import {Display} from "./display";

interface Props {
  data: Array<string>
}

export class Body extends React.Component<Props, {}> {
  constructor(props: Props){
    super(props);
  }
  
  // Return a flex div with flex div then a 2x2 CSS Grad div
  render() {
    return (
      <div className="body">
        <div className="body-info">
        </div>
        <Display
          data={this.props.data}
        />
      </div>
    );
  }
}