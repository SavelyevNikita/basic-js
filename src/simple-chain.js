import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 *
 */
export default {
    arr: [],
    getLength() {
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        return this.arr.length
    },
    addLink(value) {
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        this.arr.push(value);
        return this;
    },
    removeLink(position) {
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        if (position <= 0 || typeof position !== 'number' || position > this.arr.length) {
            this.arr = [];
            throw new Error(`You can't remove incorrect link!`);
        }
        this.arr.splice(position - 1, 1);
        return this;
    },
    reverseChain() {
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        this.arr.reverse();
        return this;
    },
    finishChain() {
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        let result = '';
        for (let i = 0; i < this.arr.length; i++) {
            if (i === 0) {
                result += '( ' + this.arr[i] + ' )';
                continue;
            }

            result += '~~' + '( ' + this.arr[i] + ' )';
        }
        this.arr = [];
        return result;
    }
};