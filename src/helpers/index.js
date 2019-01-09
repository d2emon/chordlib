/**
 * Normalize a port into a number, string, or false.
 */
export function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

export function slugToName(slug) {
  const words = slug.split('-');
  return words.map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
}
