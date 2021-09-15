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
export default function sortByHeight(array) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    const newArray = [];
    const filteredArray = array.filter(item => {
        if (item !== -1) return item;
    }).sort((a, b) => a - b);
    let j = 0;
    loop:
        for (let i = 0; i < array.length; i += 1) {
            if (array[i] === -1) {
                newArray.push(array[i]);
                continue;
            }
            // let temp = 0;

            for (; j < filteredArray.length;) {
                newArray.push(filteredArray[j]);
                j += 1;
                continue loop;
            }
        }
        // console.log(array);
        // console.log(filteredArray);
    return newArray;
}