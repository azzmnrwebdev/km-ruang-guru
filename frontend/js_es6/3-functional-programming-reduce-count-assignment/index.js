/**
 * Hitung berapa banyak pengulangan angka dari array berikut dan kembalikan dalam bentuk key-value
 * Contoh:
 *  Input: [1, 1, 1, 5, 5, 10, 9]
 *  Output: {1: 3, 5: 2, 10: 1, 9: 1}
 *
 */

const countRepetition = (numbers) => {
  // TODO: answer here
  return numbers.reduce((repetition, angka) => {
    repetition[angka] = repetition[angka] ? repetition[angka] + 1 : 1;
    return repetition;
  }, {});
};

console.log(countRepetition([1, 1, 1, 5, 5, 10, 9]));

module.exports = countRepetition;
