import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value = '') {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (position > this.chain.length || position <= 0 || !Number.isInteger(position)) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!")
    }
    this.chain.splice(position - 1, 1);
    return this;

  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const finishChain = this.chain.slice().map(item => `( ${item} )`).join('~~');
    this.chain = [];
    return finishChain;
  }
};
