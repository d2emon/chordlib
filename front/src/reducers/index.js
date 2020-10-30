import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import alphabet from '../modules/alphabet/reducers';
import artists from './artists';
import albums from './albums';
import songs from './songs';
import pages from './pages';

export default combineReducers({
  alphabet,
  artists,
  albums,
  songs,
  pages,
  form,
});
