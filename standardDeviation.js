/* Question 4
 *
 *  Implement the 'stdev' function defined below
 *
 * STDEV  - the square root of the average of the squared deviations of the values from their average value
 *        - The formula is:
 *
 *          stdev = sqrt(sum((x - populationMean)^2)/numberOfValues)
 *
 *        - you are allowed to look at Wikipedia's example calculation to help you understand the formula
 *        - Keep in mind, we are using 'Population Standard Deviation' as opposed to 'Sample Standard Deviation' for this test
 *            https://en.wikipedia.org/wiki/Standard_deviation#Population_standard_deviation_of_grades_of_eight_students
 *
 *        - use the provided 'round' function before returning your final value
 *        - you can take a square root using `Math.sqrt(number)`
 *
 * For example:
 *
 *    stdev([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    2.67
 */

// to find the total sum of a list
const sum = function(arr) {
  /* IMPLEMENT ME */
  let totalSum = 0;
  for (let ele of arr) {
    totalSum += ele;
  }
  return totalSum;
};

// This function is to be used by stdev. Do not alter.
const round = function(number) {
  return Math.round(number * 100) / 100;
};

const stdev = function(arr) {
  /* IMPLEMENT ME */
  console.log('incomign arr : ', arr);
  let numberOfValues = arr.length;
  let popMean = round(sum(arr) / numberOfValues);
  let devFromMean = [];
  let sumDevFromMean = 0;
  for (let item of arr) {
    devFromMean.push(round(Math.pow((item - popMean), 2)));
  }
  console.log('devFromMean : ', devFromMean);
  sumDevFromMean = sum(devFromMean);
  let stdDev = round(Math.sqrt(sumDevFromMean / numberOfValues));
  console.log('stdDev : ', stdDev);
  return stdDev;
};
// Don't change below:
module.exports = { stdev };
