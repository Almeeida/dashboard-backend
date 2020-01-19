/**
 * Contains various general-purpose utility methods.
 * @class Util
 */
class Util {
  /**
   * Do not create an instance of this.
   */
  constructor() {
    throw new Error(`The ${this.constructor.name} class may not be instantiated.`);
  }

  /**
   * Checks if something is empty.
   * @param {*} val The value to be checked.
   * @return {boolean} Whether it was empty or not.
   */
  static isEmpty(val) {
    if (val === null || val === undefined) return true;
    if (typeof val === 'number') return val === 0;
    if (typeof val === 'boolean') return false;
    if (typeof val === 'string' || typeof val === 'function' || Array.isArray(val)) return val.length === 0;
    if (val instanceof Error) return val.message === '';

    if (val.toString === Object.prototype.toString) {
      const type = val.toString();

      if (type === '[object File]' || type === '[object Map]' || type === '[object Set]') return val.size === 0;

      if (type === '[object Object]') {
        for (const key in val) {
          if (Object.prototype.hasOwnProperty.call(val, key)) return false;
        }

        return true;
      }
    }

    return false;
  }

  /**
   * Merges arrays into one.
   * @param {...Array<*>} args The arrays to be merged.
   * @return {Array<*>} The final array.
   */
  static mergeArrays(...args) {
    const res = [];

    for (const array of args) {
      if (!Util.isEmpty(array)) res.push(...array);
    }

    return res;
  }

  /**
   * Removes duplicate values from an array.
   * @param {Array<*>} array The array to be filtered.
   * @return {Array<*>} The filtered array.
   */
  static removeDupes(array) {
    const reduced = array.reduce((acc, cur) => Object.assign(acc, { [cur.id]: cur }), {});
    return Object.values(reduced);
  }
}

module.exports = Util;
