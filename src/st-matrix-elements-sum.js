import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(matrix) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    let count = 0;
    for (let i = 0; i < matrix.length; i += 1) {
        for (let j = 0; j < matrix[i].length; j += 1) {
            // console.log(arr[i][j]);
            if (i === 0) count += matrix[i][j];
            if (i !== 0 && matrix[i - 1][j] !== 0) count += matrix[i][j];

        }
    }
    return count;
}