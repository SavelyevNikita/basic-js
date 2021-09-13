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
    if (date === undefined) return ('Unable to determine the time of year!');
    if ((Object.keys(date).length !== 0) || (typeof date.getMonth !== 'function')) throw Error('Invalid date!');
    if (date.getMonth() >= 2 && date.getMonth() <= 4) return 'spring';
    if (date.getMonth() >= 5 && date.getMonth() <= 7) return 'summer';
    if (date.getMonth() >= 8 && date.getMonth() <= 10) return 'autumn';
    return 'winter';
}