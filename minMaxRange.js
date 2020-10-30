/* Question 1
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * MIN - the lowest value in a list
 *
 * For example:
 *
 *    min([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    0
 */
const min = function(arr) {
  /* IMPLEMENT ME */
  let minValue = arr[0];
  for (let ele of arr) {
    if (ele < minValue) {
      minValue = ele;
    }
  }
  return minValue;
};


/* ===========================================================================
 * MAX - the highest value in a list
 *
 * For example:
 *
 *    max([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
const max = function(arr) {
  /* IMPLEMENT ME */
  let maxValue = arr[0];
  for (let ele of arr) {
    if (ele > maxValue) {
      maxValue = ele;
    }
  }
  return maxValue;
};

/* ===========================================================================
 * RANGE - the difference between the highest and lowest values in a list
 *
 * For example:
 *
 *    range([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
const range = function(arr) {
  /* IMPLEMENT ME */
  return max(arr) - min(arr);
};

// Don't change below:

module.exports = { min, max, range };