export function slugToName(slug) {
  const words = slug.split('-');
  return words.map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
}
