import React from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import {
    incrementCounter,
    decrementCounter,
} from '../actions';

const mapStateToProps = state => ({
    value: state,
});

const mapDispatchToProps = dispatch => ({
    onIncrement: () => dispatch(incrementCounter()),
    onDecrement: () => dispatch(decrementCounter()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Counter);

