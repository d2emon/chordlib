import common from './common';
import letters from './letters';
import override from './override/index';

console.log(override);

export default {
  ...common,
  ...letters,
  ...override,
};
