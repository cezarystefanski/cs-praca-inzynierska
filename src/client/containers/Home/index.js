import { connect } from 'react-redux';
import { Home } from '../../components';
import {
  resetHomeVisits,
  increaseHomeVisits,
} from '../../actions';

const mapStateToProps = state => ({
  homeVisits: state.homeVisits,
});

const mapDispatchToProps = dispatch => ({
  onHomeVisit() {
    return dispatch(increaseHomeVisits());
  },
  onResetClick() {
    return dispatch(resetHomeVisits());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
