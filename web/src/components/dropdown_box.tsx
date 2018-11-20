import * as React from 'react';

interface Props {
  options: any
}

export class DropdownBox extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    console.log(this.props.options);
  } 
  // TODO: need to create a function here to make a call back to server to get the proj data
  getProjData(name: string) {
    // WIP: Update the url
    const data = fetch("placeholder")
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
    const options = this.props.options.map((option: any, index: number) => {
                          return (<li className="d_flex_r txt_12 font_white pad_4 cur_pointer bor_bot_ff">
                            {option}
                          </li>)});
    
    return (
      <div className="d_abs_r wid_100">
        <ul className="box_li wid_100 bor_1_ff bor_top_none pad_0 bg_dark_b">
          {options}   
        </ul>
      </div>
    )
  }
}