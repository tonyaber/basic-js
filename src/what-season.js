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
 * export default
 */
export default function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  if (!(date instanceof Date) || Object.prototype.toString.call(date) !== '[object Date]' || Object.keys(date).length !== 0 || typeof date !== 'object') {
    throw new Error('Invalid date!');
  }

  const seasons = {
    'winter': ['Jan', 'Feb', 'Dec'],
    'spring': ['Mar', 'Apr', 'May'],
    'summer': ['Jun', 'Jul', 'Aug'],
    'autumn': ['Sep', 'Oct', 'Nov'],
  }

  const month = date.toString().slice(4, 7);

  let season = '';

  for (const key in seasons) {
    seasons[key].forEach(element => {
      if (element == month) {
        season = key;
      }
    });
  }
  return season;
}
