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
  const mines = new Array(matrix.length+2).fill('').map(item=>new Array(matrix[0].length+2).fill(0));
  for (let i = 1; i < mines.length-1; i++) {
    for (let j = 1; j < mines[i].length-1; j++) {
      if (!matrix[i-1][j-1]) {
        continue;
      }
      mines[i - 1][j]++;
      mines[i - 1][j - 1]++;
      mines[i - 1][j + 1]++;
      mines[i][j - 1]++;
      mines[i][j + 1]++;
      mines[i + 1][j]++;
      mines[i + 1][j - 1]++;
      mines[i + 1][j + 1]++;    
    }
  }  
  return mines.slice(1, -1).map(item => item.slice(1, -1))
}
