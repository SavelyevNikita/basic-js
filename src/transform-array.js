import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!Array.isArray(arr)) throw Error("\'arr\' parameter must be an instance of the Array!");
    const cloneArray = arr.map(item => item);
    const newReturnableArray = [];
    // console.log(newArray);
    let cloneArrayLength = cloneArray.length;
    for (let i = 0; i < cloneArrayLength; i += 1) {
        if (cloneArray[i] === '--double-next' && i === cloneArrayLength - 1) continue;
        if (cloneArray[i] === '--discard-next' && i === cloneArrayLength - 1) continue;
        if (cloneArray[i] === '--discard-prev' && i === 0) continue;
        if (cloneArray[i] === '--double-prev' && i === 0) continue;
        if (cloneArray[i] === '--double-next') {
            newReturnableArray.push(cloneArray[i + 1]);
            continue;
        };
        if (cloneArray[i] === '--double-prev') {
            newReturnableArray.push(cloneArray[i - 1]);
            continue;
        };
        if (cloneArray[i] === '--discard-prev') {
            newReturnableArray.pop();
            continue;
        };
        if (cloneArray[i] === '--discard-next') {
            // newReturnableArray.push('');
            i += 2;
            continue;
        };

        newReturnableArray.push(cloneArray[i]);
    }

    return newReturnableArray;
}