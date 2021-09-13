import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let max = 0;

  for (let i = 0; i < n.toString().length; i++) {
    let str = n.toString();
    str = str.slice(0, i) + str.slice(i + 1);

    if (+str > max) {
      max = +str;
    }
  }
  return max;
}
