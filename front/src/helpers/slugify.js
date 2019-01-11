import slugify from 'slugify';

const textId = id => id || '';

const slugifyWithId = (name, id) => (
  name
    ? slugify(name, { remove: /[*+~.()'"!:@ьъ№]/g }).toLowerCase() + textId(id)
    : ''
);

export const unslugify = (slug) => {
  if (slug.length <= 0) return '';
  return slug[0].toUpperCase() + slug.substring(1).replace(/-/g, ' ');
};

export default slugifyWithId;
