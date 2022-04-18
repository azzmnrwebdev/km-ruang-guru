/**
 * Kali ini tugas kamu adalah memisahkan setiap kata dalam kalimat.
 * gunakannlah built-in function dan cari panjang dari setiap kata tersebut.
 */

var word = "wow JavaScript is so cool and i will become frontend developer";
var exampleFirstWord = word.substring(0, 3);

// TODO: answer here
let secondWord = word.substring(4, 14);
let thirdWord = word.substring(15, 17);
let fourthWord = word.substring(18, 20);
let fifthWord = word.substring(21, 25);
let sixthhWord = word.substring(26, 29);
let seventhWord = word.substring(30, 31);
let eighthWord = word.substring(32, 36);
let ninthWord = word.substring(37, 43);
let tenthWord = word.substring(44, 52);
let eleventhWord = word.substring(53, 62);

// multiline string, menggunakan template literals
console.log(`First Word: ${exampleFirstWord}, with length: ${exampleFirstWord.length}
Second Word: ${secondWord}, with length: ${secondWord.length}
Third Word: ${thirdWord}, with length: ${thirdWord.length}
Fourth Word: ${fourthWord}, with length: ${fourthWord.length}
Fifth Word: ${fifthWord}, with length: ${fifthWord.length}
Sixth Word: ${sixthhWord}, with length: ${sixthhWord.length}
Seventh Word: ${seventhWord}, with length: ${seventhWord.length}
Eighth Word: ${eighthWord}, with length: ${eighthWord.length}
Ninth Word: ${ninthWord}, with length: ${ninthWord.length}
Tenth Word: ${tenthWord}, with length: ${tenthWord.length}
Eleventh Word: ${eleventhWord}, with length: ${eleventhWord.length}`);
