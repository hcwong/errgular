import * as React from 'react';

interface Props {
  options: any
}

export class DropdownBox extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    console.log(this.props.options);
  } 
  render() {
    const options = this.props.options.map((option: any, index: number) => {
                          return (<li className="d_flex_r txt_12 font_white pad_4 cur_pointer">
                            {option}
                          </li>)});
    
    return (
      <div className="d_abs_c wid_100">
        <ul className="box_li wid_100 bor_1_ff bor_top_none pad_0 bg_dark_b">
          {options}  
        </ul>
      </div>
    )
  }
}