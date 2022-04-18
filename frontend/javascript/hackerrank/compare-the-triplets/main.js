// Compare the Triplets
// - Problem Solving (Basic)
// - Difficulty: Easy

/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

// Full Problem: https://www.hackerrank.com/challenges/compare-the-triplets/problem

function compareTriplets(a, b) {
  // Write your code here
  // TODO: answer here
  let alicePoint = 0;
  let bobPoint = 0;

  // Loop through and compare the various indexes of the two arrays
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      alicePoint += 1;
    } else if (b[i] > a[i]) {
      bobPoint += 1;
    }
  }

  let finalArray = [];
  // Add alice and bobs point to the array
  finalArray.push(alicePoint);
  finalArray.push(bobPoint);

  return finalArray;
}
function main() {
  const a = [5, 6, 7]; // override input
  const b = [3, 6, 10]; // override input

  const result = compareTriplets(a, b);

  console.log(result);
}

main(); // execute program

module.exports = compareTriplets;
