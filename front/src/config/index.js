import common from './common';
import api from './api';
import pages from './pages';
import subcultures from './subcultures';
import override from './override/index';

export default {
  ...common,
  ...api,
  ...pages,
  ...subcultures,
  ...override,
};
