import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import counter from '../modules/counter/reducers';
import todos from '../modules/todos/reducers/todos';
import visibilityFilter from '../modules/todos/reducers/visibilityFilter';
import alphabet from '../modules/alphabet/reducers';
import artists from './artists';
import albums from './albums';
import songs from './songs';
import pages from './pages';

export default combineReducers({
  counter,
  todos,
  visibilityFilter,
  alphabet,
  artists,
  albums,
  songs,
  pages,
  form,
});
