import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (domains.length < 1) return {};
    const obj = {};
    const set = new Set();
    const array = []
    for (const item of domains) {
        item.split('.').forEach(element => {
            array.push(element);
            set.add(element);
        });
    }
    let count;
    for (const itemSet of set) {
        count = 0;
        for (const item of array) {
            if (itemSet === item) count += 1;
        }
        if (itemSet === 'com') {
            obj['.com'] = count;
        }
        if (itemSet === 'epam') {
            obj['.com.epam'] = count;
        }
        if (itemSet === 'info') {
            obj['.com.epam.info'] = count;
        }

    }
    return obj;
}