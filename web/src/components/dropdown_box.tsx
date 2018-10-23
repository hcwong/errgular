import * as React from 'react';

export class DropdownBox extends React.Component<any, {}> {
  constructor(props: any) {
    super(props);
  } 
  render() {
    return (
      <div className="d_flex_c">
        <div className="d_flex_r">
          <div className="txt_14">{this.props.title}</div>
        </div>
        <ul className="box_li">
          {this.props.options.map((option: any) => {
            <li className="txt_12 font_black">
              {option.name}
            </li>
          })}  
        </ul>
      </div>
    )
  }
}