import { connect } from 'react-redux';
import Counter from '../components/Counter';
import {
    incrementCounter,
    decrementCounter,
} from '../actions/counterActions';

const mapStateToProps = state => ({
    value: state.counter,
});

const mapDispatchToProps = dispatch => ({
    onIncrement: () => dispatch(incrementCounter()),
    onDecrement: () => dispatch(decrementCounter()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Counter);

