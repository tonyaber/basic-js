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
  constructor(value=true) {
    this.reverse = !value;
  }

  makeEncrypt(message, key, encrypt) {
    if (message === null || key === null) {
      throw new Error('Incorrect arguments!')
    }

    let j = 0;
    let cipher = '';

    message = message.toLowerCase();
    key = key.toLowerCase();

    for (let i = 0; i < message.length; i++) {
      if (message[i].charCodeAt() < 97 || message[i].charCodeAt() > 122) {
        cipher += message[i];
        continue;
      }

      if (j >= key.length) {
        j = 0;
      }
      
      let countMessage = encrypt ? (message[i].charCodeAt() + key[j].charCodeAt() - 97)
        : (message[i].charCodeAt() - (key[j].charCodeAt() - 97));
      
      if (encrypt) {
        if (countMessage > 122) {
          countMessage -= 26
        }
      } else {
        if (countMessage < 97) {
          countMessage += 26
        }
      }
      
      cipher += String.fromCharCode(countMessage).toUpperCase();
      j++;
    }

    if (this.reverse) {
      return cipher.split('').reverse().join('');
    }
    return cipher;
  }

  encrypt(message = null, key = null) {
    return this.makeEncrypt(message, key, true)
  }

  decrypt(message = null, key = null) {
    return this.makeEncrypt(message, key, false);
  }
}
const directMachine = new VigenereCipheringMachine();
console.log(directMachine.encrypt('AEIHQX SX DLLU!', 'alphonse'))


