import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import counter from './counter';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import artists from './artists';
import alphabet from '../modules/alphabet/reducers';

export default combineReducers({
    counter,
    todos,
    visibilityFilter,
    alphabet,
    artists,
    form,
});
