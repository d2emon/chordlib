import { connect } from 'react-redux';
import Letters from '../components/Letters';

const mapStateToProps = state => ({
    alphabets: state.alphabet.alphabets,
    specials: state.alphabet.specials,
});

export default connect(
    mapStateToProps,
)(Letters);
