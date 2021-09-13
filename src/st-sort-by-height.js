import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */

export default function sortByHeight(arr) {
  const sortArr = arr.slice()
    .filter(item => item !== -1)
    .sort((a, b) => a - b);

  const newArr = [];

  let j = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      newArr.push(-1);
    }
    else {
      newArr.push(sortArr[j]);
      j++;
    }
  }
  return newArr;
}
