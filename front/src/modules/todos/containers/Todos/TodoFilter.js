import { connect } from 'react-redux';
import { setVisibilityFilter } from "../../actions/todosActions";
import TodoFilterLink from '../../components/Todos/TodoFilterLink';

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.visibilityFilter,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodoFilterLink);

