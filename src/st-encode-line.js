import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let strCopy = str.slice();
  let encodeStr = '';

  for (let i = 0; i < str.length;) {
    const count = strCopy.match(new RegExp(`(${str[i]})+`, ""))[0].length;

    encodeStr += count > 1 ? count + str[i] : str[i];
    strCopy = strCopy.slice(count);

    i += count;
  }
  return encodeStr;
}
