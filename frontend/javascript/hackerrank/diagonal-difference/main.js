// Diagonal Difference
// - Problem Solving (Basic)
// - Difficulty: Easy

/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

// Full Problem: https://www.hackerrank.com/challenges/diagonal-difference/problem

function diagonalDifference(arr) {
  // Write your code here
  // TODO: answer here
  var n = arr.length;
  var d1 = 0;
  var d2 = 0;
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      // finding the sum of primary diagonal
      if (i === j) {
        d1 += arr[i][j];
      }
      // finding the sum of secondary diagonal
      if (i + j === n - 1) {
        d2 += arr[i][j];
      }
    }
  }
  return Math.abs(d1 - d2);
}

function main() {
  // var n = parseInt(readLine());
  var a = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
  ]; // override input
  let result = diagonalDifference(a);
  console.log(result);
}

main(); // execute program

module.exports = diagonalDifference;
