import common from './common';
import api from './api';
import pages from './pages';
import override from './override/index';

export default {
  ...common,
  ...api,
  ...pages,
  ...override,
};
