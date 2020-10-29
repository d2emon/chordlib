import common from './common.json';
import api from './api.json';
import pages from './pages.json';
import subcultures from './subcultures.json';
import override from './override/index';

export default {
  ...common,
  ...api,
  ...pages,
  ...subcultures,
  ...override,
};
