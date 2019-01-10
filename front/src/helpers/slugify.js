import slugify from 'slugify';

const textId = id => id || '';

const slugifyWithId = (name, id) => name
  ? slugify(name, { remove: /[*+~.()'"!:@ьъ№]/g }).toLowerCase() + textId(id)
  : '';

export default slugifyWithId;
