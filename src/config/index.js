import common from './common';
import letters from './letters';
import folders from './folders';
import pages from './pages';
import override from './override/index';

export default {
  ...common,
  ...letters,
  ...folders,
  ...pages,
  ...override,
};
