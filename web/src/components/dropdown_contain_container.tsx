import { connect } from 'react-redux';

import { DropdownContain } from './dropdown_contain';
import { getProj } from '../actions';

const mapStateToProps = (state: any) => ({
  currentProj: state.currentProj,
});

const mapDispatchToProps = (dispatch: any) => ({
  handler: ((name: string, projData: any) => dispatch(getProj(name, projData))),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DropdownContain);
