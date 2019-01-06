import { connect } from 'react-redux';

import { DropdownContain } from './dropdown_contain';
import { getProj } from '../actions';
// import { getProj } from "../actions";

// const getCurrentProj = (name: string) => {
//   return name;
// };

// const mapDispatchToProps = (dispatch: any) => ({
//   projHandler: (name: string) => dispatch(getProj(name))
// });

const mapStateToProps = (state: any) => ({
  // currentProj: getCurrentProj(state.currentProj),
  // isProjButtonClicked: state.isProjButtonClicked,
  currentProj: state.currentProj,
});

const mapDispatchToProps = (dispatch: any) => ({
  handler: ((name: string) => dispatch(getProj(name))),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DropdownContain);
