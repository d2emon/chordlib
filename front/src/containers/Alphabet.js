import { connect } from 'react-redux';
import Letters from '../components/Letters';

const mapStateToProps = state => ({
    value: state.counter,
    alphabet: state.alphabet,
});

export default connect(
    mapStateToProps,
)(Letters);

