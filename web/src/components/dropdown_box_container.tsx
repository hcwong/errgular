import { connect } from "react-redux";

import { DropdownBox } from "./dropdown_box";
import { getProj } from "../actions";

export const mapDispatchtoProps = (dispatch: any) => ({
  handler: (name: string) => dispatch(getProj(name)) 
});

export default connect(
  mapDispatchtoProps
)(DropdownBox);