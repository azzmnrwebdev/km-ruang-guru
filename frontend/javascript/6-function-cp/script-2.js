const prompt = require("prompt-sync")({ sigint: true });

// Mengembalikan boolean untuk mengecek apakah teks palindrome
// contoh:
// teks1 = hello
// teks2 = madam
// teks3 = kasur ini rusak
// hasil:
// teks1 dibalik menjadi olleh, maka balikan akan false
// teks2 dibalik sama menjadi madam, maka balikan akan true
// teks3 dibalik sama menjadi kasur ini rusak, maka balikan akan true

function checkPalindrome(string) {
  // TODO: answer here
  const len = string.length;
  for (let i = 0; i < len / 2; i++) {
    if (string[i] !== string[len - 1 - i]) {
      return "Bukan palindrome";
    }
  }
  return "palindrome";
}

// masukan teks
const string = prompt("Masukan string: ");

// memanggil fungsi palindrome
const value = checkPalindrome(string);

console.log(value);
