import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  encrypt(message = null, key = null) {
    if (message === null || key === null) {
      throw new Error('Incorrect arguments!')
    }
    throw new NotImplementedError('Not implemented');


  }
  decrypt(message = null, key = null) {
    if (message === null || key === null) {
      throw new Error('Incorrect arguments!')
    }
    throw new NotImplementedError('Not implemented');
  }
}
//const directMachine = new VigenereCipheringMachine();
//console.log(directMachine.encrypt('AEIHQX SX DLLU!', 'alphonse'))

