import { connect } from 'react-redux';
import Letters from '../components/Letters';

const mapStateToProps = state => ({
    alphabets: state.alphabet.alphabets,
    additionalLinks: state.alphabet.additionalLinks,
});

export default connect(
    mapStateToProps,
)(Letters);
