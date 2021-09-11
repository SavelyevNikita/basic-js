import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(array) {
    if (!Array.isArray(array)) return false;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let nameOfTeam = [];
    for (const item of array) {
        // console.log(tempType);
        // console.log(item.toString().trim()[0]);
        (typeof item === 'string') ? nameOfTeam.push(item.toString().trim()[0].toUpperCase()): nameOfTeam;
    }
    // console.log(nameOfTeam.sort().join(''));
    return (nameOfTeam.sort().join(''));
}