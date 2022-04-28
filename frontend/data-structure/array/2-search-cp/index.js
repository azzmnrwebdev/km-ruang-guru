function searchMatch(arr1, arr2) {
  let result = [];
  let newArr = arr1.concat(arr2);

  for (let i = 0; i < newArr.length; i++) {
    for (let j = i+1; j < newArr.length; j++) {
      if (newArr[i] == newArr[j]) {
        result.push(newArr[j])
      }
    }
  }

  return result; // TODO: replace this
}

let cars1 = ["Toyota", "Honda", "Nissan", "BMW", "Chevy", "Ford"];
let cars2 = ["Ford", "BMW", "Audi", "Mercedes"];

result = searchMatch(cars1, cars2);
console.log(result);

module.exports = {searchMatch}