/**
 * Konversikan menit pada paramter menjadi satuan jam.
 * Misal: 
 * - 99 menjadi "1:39"
 * - 132 menjadi "2:12"
 * 
 * notes:
 * - type data pada parameter akan selalu INTEGER
 * - type data pada result akan selalu berupa STRING
 */



function konversiMenit(menit) {
  // TODO: answer here
  let hours = Math.floor(menit / 60);
  let minutes = menit % 60;
  if (String(hours).length === 1) {
    minutes = "0" + minutes;
  }

  let result = `${minutes}:${minutes}`;
  return String(result);
}

console.log(konversiMenit(61));
console.log(konversiMenit(94));
console.log(konversiMenit(51));
console.log(konversiMenit(187));

module.exports = konversiMenit;