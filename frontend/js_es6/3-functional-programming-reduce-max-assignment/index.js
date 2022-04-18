/**
 * Cari nilai tertinggi dari array menggunakan reduce
 * Contoh:
 *  Input: [1, 1, 1, 5]
 *  Output: 5
 *
 * Catatan: Tidak boleh menggunakan perintah Math.max().
 */

const maxFromArray = (numbers) => {
  // TODO: answer here
  return numbers.reduce((prev, curr) => (prev > curr ? prev : curr));
};

console.log(maxFromArray([1, 1, 1, 5]));

module.exports = maxFromArray;
