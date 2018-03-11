import { connect } from 'react-redux';
import { Example } from '../../components';
import {
  changeExampleNumber,
  increaseExampleNumber,
  decreaseExampleNumber,
} from '../../actions';

const mapStateToProps = state => ({
  exampleStoreNumber: state.exampleNumber,
});

const mapDispatchToProps = dispatch => ({
  onBindClick: (number) => {
    dispatch(changeExampleNumber(number));
  },
  onIncreaseClick: () => {
    dispatch(increaseExampleNumber());
  },
  onDecreaseClick: () => {
    dispatch(decreaseExampleNumber());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Example);
