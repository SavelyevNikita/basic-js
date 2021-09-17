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
    const array = [];
    const finalyArray = [];
    const strArray = str.split('');
    let count = 0;
    for (let i = 0; i < strArray.length; i += 1) {
        if (!array.includes(strArray[i]) && array.length === 0) array.push(strArray[i]);

        if (array.includes(strArray[i])) count += 1;

        if (!array.includes(strArray[i + 1])) {
            if (count > 1) finalyArray.push(count);
            finalyArray.push(strArray[i]);
            array.pop();
            count = 0;
        }
    }
    return finalyArray.join('');
}