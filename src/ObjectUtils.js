/**
 * To check null or undefined
 * @param {any} val The value to be checked
 * @returns true if the value is null or undefined; otherwise, false.
 */
export const isNull = (val) => {
  return val === undefined || val === null;
};
/**
 * To check not null and not undefined
 * @param {any} val The value to be checked
 * @returns true if the value is not null and not undefined; otherwise, false.
 */
export const isNotNull = (val) => {
  return val !== undefined && val !== null;
};

/**
 * To get type of a value
 * @param {any} val The value
 */
export const toType = val => typeof val;

/**
 * To check is a function or not
 * @param {*} val The value to be checked
 * @returns true if the value is a Funtion; otherwise, false.
 */
export const isFunction = val => toType(val) === 'function';

/**
 * To check is a string or not
 * @param {*} val The value to be checked
 * @returns true if the value is a String; otherwise, false.
 */
export const isString = val => toType(val) === 'string';

/**
 * To check object is not empty
 * @param {*} val  to be checked
 * @returns true if the value is not empty; otherwise, false.
 */
export const isNotEmpty = val => (val && Object.keys(val).length);

/**
 * To check object is number
 * @param {*} val  to be checked
 * @returns true if the value is number; otherwise, false.
 */
export const isNumber = val => (!isNaN(val) && val !== '' && val !== true);