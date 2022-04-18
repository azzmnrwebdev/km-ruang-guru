const prompt = require("prompt-sync")({ sigint: true });

// Pengecekan angka positif, negatif, atau 0 dengan nested if
// Masukan suatu angka
const number = parseInt(prompt("Masukan bilangan: "));

// TODO: answer here
// if => periksa apakah jumlah-nya lebih besar dari 0, jika iya maka angka itu 'positif'
if (number > 0) console.log("Angka Positif");
// kondisi dimana jika angka-nya sama dengan 0
else if (number == 0) console.log("Angka Nol");
// kondisi dimana jika angka-nya kurang dari 0
else console.log("Angka Negatif");
