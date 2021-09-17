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
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    const cleanString = [];
    let string = '';
    for (const item of str) {
        if (!cleanString.includes(item)) cleanString.push(item);
    }
    for (const itemCleanString of cleanString) {
        let count = 0;
        for (const item of str) {
            if (itemCleanString === item) count += 1;
        }
        string += count + itemCleanString;
    }
    return string;
}