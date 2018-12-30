import { connect } from "react-redux";

import { DropdownBox } from "./dropdown_box";
import { getProj } from "../actions";

const mapDispatchToProps = (dispatch: any) => ({
  handler: ((name: string) => dispatch(getProj(name)))
});

export default connect(
  null,
  mapDispatchToProps
)(DropdownBox);