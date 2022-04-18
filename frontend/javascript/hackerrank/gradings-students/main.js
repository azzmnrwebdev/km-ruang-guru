// Grading Students
// - Problem Solving (Basic)
// - Difficulty: Easy

/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

// Full Problem: https://www.hackerrank.com/challenges/grading/problem

function gradingStudents(grades) {
  // Write your code here
  // TODO: answer here
  // Used map high order array method to single out each element in array
  return grades.map((n) => {
    // find the difference after division with 5
    let diff = 5 - (n % 5);
    // make our test cases and add the diff if condition is true
    if (diff < 3 && n >= 38) {
      n += diff;
    }
    return n;
  });
}

function main() {
  // var n = parseInt(readLine());
  // var grades = [];
  // for (var grades_i = 0; grades_i < n; grades_i++) {
  //   grades[grades_i] = parseInt(readLine());
  // }
  var grades = [73, 67, 38, 33]; // override input
  var result = gradingStudents(grades);
  console.log(result.join("\n"));
}

main(); // execute program

module.exports = gradingStudents;
