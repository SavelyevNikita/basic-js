import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let count = 0;
    const temp = [];
    loopi:
        for (let i = 0; i < s1.length; i += 1) {
            for (let j = 0; j < s2.length; j += 1) {
                if (s1[i] === s2[j] && !temp.includes(j)) {
                    temp.push(j);
                    count += 1;
                    continue loopi;
                }
            }
        }
    return count;
}