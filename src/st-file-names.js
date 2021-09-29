import { NotImplementedError } from '../extensions/index.js';

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
export default function renameFiles(names) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    const obj = {};
    for (let item of names) {
        if (item in obj) {
            obj[item] += 1;
            item = `${item}(${obj[item]})`
            obj[item] = 0;
            continue;
        }
        obj[item] = 0;
    }
    return Object.keys(obj);
}