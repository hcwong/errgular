import * as React from 'react';

interface Props {
  section: string;
}

// tslint:disable-next-line
export const DisplayBox = (props: Props) => {
  return(
    <div className={`grid-box${props.section}`}>
      Placeholder Text
    </div>
  );
};
