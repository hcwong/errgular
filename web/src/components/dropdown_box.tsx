import * as React from 'react';

interface Props {
  handler: any
}

export const DropdownBox = (props: Props) => {
  // Call server to get all the available options. Make it part of the state when add/remove options added?
  const placeholderOptions = ["test1", "test2"];
  const options = placeholderOptions.map(
    (option: string) => 
      <li 
        className="d_flex_r txt_12 font_white pad_4 cur_pointer bor_bot_ff z_ind_l1"
        onClick={() => props.handler(option)}
      >
        {option}
      </li>
  );

  return (
    <div className="d_abs_r wid_100">
      <ul className="box_li wid_100 bor_1_ff bor_top_none pad_0 bg_dark_b">
       {options}
      </ul>
    </div>
  )
};

// export class DropdownBox extends React.Component<Props, {}> {
//   constructor(props: Props) {
//     super(props);
//     console.log(this.props.options);
//   } 

//   render() {
//     const options = this.props.options.map((option: any, index: number) => {
//                           return (<li className="d_flex_r txt_12 font_white pad_4 cur_pointer bor_bot_ff">
//                             {option}
//                           </li>)});
    
//     return (
//       <div className="d_abs_r wid_100">
//         <ul className="box_li wid_100 bor_1_ff bor_top_none pad_0 bg_dark_b">
//           {options}   
//         </ul>
//       </div>
//     )
//   }
// }