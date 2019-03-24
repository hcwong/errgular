// NOT IN USE

import * as React from 'react';

const svgDown = require("./../../../img/arrow_down.svg");

interface Props {
  btnName: string;
  handler: any;
}

export const DropdownBtn = (props: Props) => {
  console.log(props);
  return (
    <div className="navbar-proj-name bor_1_ff"
      onClick={() => props.handler()}
    >
      {props.btnName}
      <img src={svgDown}/>
    </div>
  );
};
