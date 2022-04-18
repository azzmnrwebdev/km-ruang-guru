const prompt = require("prompt-sync")({ sigint: true });

// Mengembalikan teks yang berkebalikan
// contoh:
// teks = hello world
// hasil: dlrow olleh

function reverseString(str) {
  // TODO: answer here
  let currentString = str;
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += currentString[i];
  }

  return newString;
}

const string = prompt("Masukan teks: ");

const result = reverseString(string);
console.log(result);
