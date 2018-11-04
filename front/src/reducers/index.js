import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import alphabet from './alphabet';

export default combineReducers({
    counter,
    todos,
    visibilityFilter,
    alphabet,
});
