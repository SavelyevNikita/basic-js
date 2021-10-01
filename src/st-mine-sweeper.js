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
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    const resultArray = JSON.parse(JSON.stringify(matrix));
    let count;
    for (let i = 0; i < matrix.length; i += 1) {
        for (let j = 0; j < matrix[i].length; j += 1) {
            count = 0;
            if (i === 0 && j === 0) {
                if (matrix[i][j + 1] === true) count += 1;
                if (matrix[i + 1][j + 1] === true) count += 1;
                if (matrix[i + 1][j] === true) count += 1;
            }
            if (i === 0 && j !== 0 && (j + 1) !== matrix[i].length) {
                if (matrix[i][j - 1] === true) count += 1;
                if (matrix[i + 1][j] === true) count += 1;
                if (matrix[i][j + 1] === true) count += 1;
                if (matrix[i + 1][j - 1] === true) count += 1;
                if (matrix[i + 1][j + 1] === true) count += 1;
            }
            if (i === 0 && (j + 1) === matrix[i].length) {
                if (matrix[i][j - 1] === true) count += 1;
                if (matrix[i + 1][j] === true) count += 1;
                if (matrix[i + 1][j - 1] === true) count += 1;
            }
            if (i !== 0 && (i + 1) !== matrix.length && j === 0) {
                if (matrix[i - 1][j] === true) count += 1;
                if (matrix[i - 1][j + 1] === true) count += 1;
                if (matrix[i][j + 1] === true) count += 1;
                if (matrix[i + 1][j] === true) count += 1;
                if (matrix[i + 1][j + 1] === true) count += 1;
            }
            if (i !== 0 && (i + 1) !== matrix.length && (j + 1) === matrix[i].length) {
                if (matrix[i - 1][j - 1] === true) count += 1;
                if (matrix[i - 1][j] === true) count += 1;
                if (matrix[i][j - 1] === true) count += 1;
                if (matrix[i + 1][j - 1] === true) count += 1;
                if (matrix[i + 1][j] === true) count += 1;
            }
            if ((i + 1) === matrix.length && j === 0) {
                if (matrix[i - 1][j] === true) count += 1;
                if (matrix[i - 1][j + 1] === true) count += 1;
                if (matrix[i][j + 1] === true) count += 1;
            }
            if ((i + 1) === matrix.length && j !== 0 && (j + 1) !== matrix[i].length) {
                if (matrix[i - 1][j - 1] === true) count += 1;
                if (matrix[i - 1][j] === true) count += 1;
                if (matrix[i - 1][j + 1] === true) count += 1;
                if (matrix[i][j - 1] === true) count += 1;
                if (matrix[i][j + 1] === true) count += 1;
            }
            if ((i + 1) === matrix.length && (j + 1) === matrix[i].length) {
                if (matrix[i][j - 1] === true) count += 1;
                if (matrix[i - 1][j - 1] === true) count += 1;
                if (matrix[i - 1][j] === true) count += 1;
            }
            if (i !== 0 && j !== 0 && (i + 1) < matrix.length && (j + 1) < matrix[i].length) {
                if (matrix[i - 1][j - 1] === true) count += 1;
                if (matrix[i - 1][j] === true) count += 1;
                if (matrix[i - 1][j + 1] === true) count += 1;
                if (matrix[i][j - 1] === true) count += 1;
                if (matrix[i][j + 1] === true) count += 1;
                if (matrix[i + 1][j - 1] === true) count += 1;
                if (matrix[i + 1][j] === true) count += 1;
                if (matrix[i + 1][j + 1] === true) count += 1;
            }
            resultArray[i][j] = count;
        }
    }
    return resultArray;
}