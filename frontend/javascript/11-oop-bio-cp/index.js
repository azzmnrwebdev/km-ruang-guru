/**
 * Pada soal kali ini disediakan class `Person` dimana kalian diminta untuk melengkapi serta membuat beberapa hal dibawah ini:
 * - Class Person yang memiliki properti name, age, dan job
 * - Buatlah getter untuk masing masing Properti diatas dengan format `getName` untuk mendapatkan nama, `getAge` untuk mendapatkan usia, dan `getJob` untuk mendapatkan pekerjaan dari class Person.
 * - Buatlah setter untuk masing masing Properti diatas dengan format `setName` untuk mengubah nilai nama, `setAge` untuk mengubah nilai usia, dan `setJob` untuk mengubah nilai pekerjaan dari class Person
 */

class Person {
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }

  // TODO: answer here
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
  getJob() {
    return this.job;
  }

  setName(changeName) {
    this.name = changeName;
  }
  setAge(changeAge) {
    this.age = changeAge;
  }
  setJob(changeJob) {
    this.job = changeJob;
  }
}

const person = new Person("John", 25, "Front End Engineer");
console.log(person.getName());
person.setName("Jane");
console.log(person.getName());

module.exports = Person;
