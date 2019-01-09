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
  return slug[0].toUpperCase() + slug.substring(1).replace(/-/g, ' ');
}
