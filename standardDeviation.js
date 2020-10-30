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
  //2, 4, 4, 4, 5, 5, 7, 9
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
// *          stdev = sqrt(sum((x - populationMean)^2)/numberOfValues)


// const stdev = function(arr) {
//   /* IMPLEMENT ME */
//   console.log('arr : ', arr);
//   let stdDev = 0;
//   let mean = median(arr)
//   console.log('mean : ',mean);
//   let result = 0;
//   console.log('arr is finally :',arr);
//   for (let item of arr){
//     console.log('item : ',item);
//     result += Math.sqrt(sum(Math.pow(item - mean),2)/arr.length)
//   }
//   console.log('result',result);
//   return result
// };
// *          stdev = sqrt(sum((x - populationMean)^2)/numberOfValues)
// Don't change below:
module.exports = { stdev };
