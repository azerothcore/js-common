/**
 * @param {*} item
 */
export function isObject(item) {
  return item && typeof item === 'object' && !Array.isArray(item);
}

/**
 * @param {Object} target
 * @param {Object} source
 */
export function mergeDeep(target, source) {
  const output = Object.assign({}, target);
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isObject(source[key])) {
        if (!(key in target)) Object.assign(output, {[key]: source[key]});
        else {
          output[key] = mergeDeep(target[key], source[key]);
        }
      } else {
        Object.assign(output, {[key]: source[key]});
      }
    });
  }
  return output;
}

/**
 * Method to convert a javascript object
 * to a compatible graphql string
 *
 * @param {Object} obj
 */
export function objToGql(obj) {
  return (
    '{' +
    Object.keys(obj)
        .map(
            (v) =>
              `${v} : "${
            typeof obj[v] === 'string' ? obj[v].replace(/"/g, '\\"') : obj[v]
              }"`,
        )
        .join(',') +
    '}'
  );
}

export default {
  isObject,
  mergeDeep,
  objToGql,
};
