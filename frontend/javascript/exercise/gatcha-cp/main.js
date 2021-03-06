/**
 * Kali ini kamu diminta untuk membuat sebuah game gatcha dengan ketentuan berikut:
 * - diberikan sebuah variable button yang akan mengenerate angka random 1 - 5
 * - jika mendapat angaka 1 maka akan menampilkan "coba lagi ya"
 * - jika mendapat angaka 2 maka akan menampilkan "selamat kamu mendapatkan kupon sebanyak 5"
 * - jika mendapat angaka 3 maka akan menampilkan "selamat kamu mendapatkan kupon sebanyak 15"
 * - jika mendapat angaka 4 maka akan menampilkan "selamat kamu mendapatkan kupon sebanyak 50"
 * - jika mendapat angaka 5 maka akan menampilkan "selamat kamu mendapatkan kupon sebanyak 100"
 * Buatlah Pseudocode beserta codenya menggunakan conditional "switch"
 */

/**
 * PSEUDOCODE:
 * TODO: answer here
 * 
 * START PROGRAM
 *  FUNCTION gatcha(button)
 *    IF button === 1 THEN
 *        RETURN "coba lagi ya"
 *      ELSE IF === 2 THEN 
 *        RETURN "selamat kamu mendapatkan kupon sebanyak 5"
 *      ELSE IF === 3 THEN 
 *        RETURN "selamat kamu mendapatkan kupon sebanyak 15"
 *      ELSE IF === 4 THEN 
 *        RETURN "selamat kamu mendapatkan kupon sebanyak 50"
 *      ELSE
 *        RETURN "selamat kamu mendapatkan kupon sebanyak 100"
 *     END IF
 *  END FUNCTION
 * END PROGRAM
 */

function gatcha(button) {
  // TODO: answer here
  switch (button) {
    case 1: return "coba lagi ya";
    case 2: return "selamat kamu mendapatkan kupon sebanyak 5";
    case 3: return "selamat kamu mendapatkan kupon sebanyak 15";
    case 4: return "selamat kamu mendapatkan kupon sebanyak 50";
    default: return "selamat kamu mendapatkan kupon sebanyak 100";
  }
}

// Create variable button here
// TODO: answer here
let button = Math.floor(Math.random() * 5) + 1; // mengembalikan bilangan bulat acak dari 1 hingga 5

console.log(`${button} = ` + gatcha(button));

module.exports = gatcha;
