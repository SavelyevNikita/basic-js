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
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let string = '';
    const stringArray = [];
    for (let i = 0; i < String(n).length; i += 1) {
        string = '';
        for (let j = 0; j < String(n).length; j += 1) {
            if (i !== j) {
                string += String(n)[j];
            }
        }
        stringArray.push(+string);
    }
    return stringArray.sort((a, b) => {
        if (a > b) return -1;
        if (a == b) return 0;
        if (a < b) return 1;
    })[0];
}