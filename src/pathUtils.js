import appRootPath from 'app-root-path';
import path from 'path';

/**
 * @returns {string} - returns the appRoot path
 */
export function appRoot() {
  return (
    (process.mainModule &&
      process.mainModule.paths[0].split('node_modules')[0].slice(0, -1)) ||
    appRootPath
  );
}

/**
 * @param {string} dest
 */
export function fromAppRoot(dest) {
  return path.join(appRoot().toString(), dest);
}

/**
 * @param {string} dest
 */
export function resolvePath(dest) {
  return ~['~', '/'].indexOf(dest.charAt(0)) ?
    dest :
    path.join(appRoot().toString(), dest);
}
