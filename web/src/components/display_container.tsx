import { connect } from 'react-redux';
import { Display } from './display';

const mapStateToProps = (state: any) => ({
  currentProj: state.currentProj,
});

export default connect(
  mapStateToProps,
)(Display);
