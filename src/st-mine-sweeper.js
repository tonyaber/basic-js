import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

export default function minesweeper(matrix) {
  const mines = matrix.slice().map(item => item.map(el => el = 0));
  for (let i = 0; i < matrix.length; i++) {
    const up = i > 0;
    const down = i < matrix.length;
    for (let j = 0; j < matrix[i].length; j++) {
      if (!matrix[i][j]) {
        continue;
      }
      const left = j > 0;
      const rigth = j < matrix[i].length;
      if (up) {
        mines[i - 1][j]++;
        if (left) {
          mines[i - 1][j - 1]++;
        }
        if (rigth) {
          mines[i - 1][j + 1]++;
        }
      }
      if (left) {
        mines[i][j - 1]++;
      }
      if (rigth) {
        mines[i][j + 1]++;
      }
      if (down) {
        mines[i + 1][j]++;
        if (left) {
          mines[i + 1][j - 1]++;
        }
        if (rigth) {
          mines[i + 1][j + 1]++;
        }
      }
    }
  }
  return mines
}
