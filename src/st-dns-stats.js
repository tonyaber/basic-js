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
  const countOfDomains = {};
  const arrayOfDomains = domains.map((el) => el.split('.').reverse(''));
  const allDomainsStr = domains.join(' ');

  arrayOfDomains.forEach(item => {
    let domain = '';
    for (let i = 0; i < item.length; i++) {
      domain += `.${item[i]}`;
      if (!countOfDomains.hasOwnProperty(domain)) {
        countOfDomains[domain] = allDomainsStr.match(new RegExp(item[i], "g")).length;
      }
    }
  })
  return countOfDomains;
}
