import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
    calculateDepth(arr) {
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here

        // const deepCount = (arr) => {
        return arr.reduce((acc, val) => {
            return acc + (Array.isArray(val) ? calculateDepth(val) : 0);
        }, 1);
    };
}