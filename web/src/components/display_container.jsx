// @flow
import { connect } from 'react-redux';
import { Display } from './display';
import { ProjectState } from '../store'

const mapStateToProps = (state: ProjectState) => ({
  currentProj: state.currentProj,
});

export default connect(
  mapStateToProps,
)(Display);
