/**
 * Tampilkan tipe data dari setiap elemen array
 * Input: ["A", 3, [2]]
 * Output: ["string", "number", "object"]
 *
 * Hint:
 * - Untuk pengecekan tipe data kalian dapat menggunakan typeof
 * - Pastikan menggunakan for-of untuk perulangan
 */

const convertElementToType = (array) => {
  // TODO: answer here
  return array.map((item) => {
    return typeof item;
  });
};

console.log(convertElementToType(["A", 3, [2]]));

module.exports = convertElementToType;
