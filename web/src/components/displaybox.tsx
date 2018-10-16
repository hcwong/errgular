import * as React from "react";

interface Props {
  section: string
}

export const DisplayBox = (props: Props) => {
  return(
    <div className={"grid-box"+this.props.section}>
      Placeholder Text
    </div>
  )
}

