// @flow
import { connect } from 'react-redux';
import { DropdownContain } from './dropdown_contain';
import { getProjData } from '../actions';
import { ProjectState } from '../store';

const mapStateToProps = (state: ProjectState) => ({
  currentProj: state.currentProj,
});

const mapDispatchToProps = (dispatch: any) => ({
  handler: ((name: string) => dispatch(getProjData(name))),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DropdownContain);
