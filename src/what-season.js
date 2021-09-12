import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    const typeDate = typeof date;
    if (date === undefined) return 'Unable to determine the time of year!';
    console.log(typeof date.getUTCMonth === 'function');
    if (typeof date.getMonth === 'function') {
        if (date.getMonth() >= 2 && date.getMonth() <= 4) return 'spring';
        if (date.getMonth() >= 5 && date.getMonth() <= 7) return 'summer';
        if (date.getMonth() >= 8 && date.getMonth() <= 10) return 'autumn';
        return 'winter';
    } else return 'Invalid date!';
}