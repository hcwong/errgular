import * as React from 'react';
import { DisplayBox } from './displaybox';

interface Props {
  currentProj: string;
}

export const Display = (props: Props) => {
  if (props.currentProj === 'Select One') {
    return (
      <div>
        Select a Project
      </div>
    );
  } else {
    return (
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
};
