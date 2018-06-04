import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Preachings from '../components/Preachings/Preachings';
import * as PreachingsActions from '../actions/preachings';

const mapStateToProps = state => {
  return {
    preachings: state.preachings,
    preaching: state.preaching
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(PreachingsActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Preachings);
