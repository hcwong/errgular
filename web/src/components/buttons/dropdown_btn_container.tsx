import { connect } from "react-redux";

import { DropdownBtn } from "./dropdown_btn";
import { projButtonClicked } from "../../actions";


const getCurrentProj = (name: string) => {
  return name;
};

const mapStateToProps = (state: any) => ({
  btnName: getCurrentProj(state.currentProj)
});

const mapDispatchToProps = (dispatch: any) => ({
  handler: (() => dispatch(projButtonClicked()))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DropdownBtn);