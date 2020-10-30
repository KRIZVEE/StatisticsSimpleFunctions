/* Question 3
 *
 *  Implement the 'mode' function defined below
 *
 * MODE - the most frequently occurring number
 *      - for this test, the provided lists will only have a single value for the mode
 *
 * For example:
 *
 *    mode([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    6
 */

const mode = function(arr) {
  /* IMPLEMENT ME */
  let dict = {};
  for (let key of Object.keys(arr)) {
    if (dict[arr[key]]) {
      dict[arr[key]] += 1;
    } else {
      dict[arr[key]] = 1;
    }
  }
  let maxVal = 0;
  let resultKey = 0;
  for (let key in dict) {
    console.log('key : ', key);
    if (dict[key] > maxVal) {
      maxVal = dict[key];
      resultKey = key;
    }
  }
  return resultKey;
};

// Don't change below:

module.exports = { mode };
