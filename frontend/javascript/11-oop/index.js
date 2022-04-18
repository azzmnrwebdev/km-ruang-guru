// Seperti yang kalian sudah pelajari, penggunaan class adalah seperti ini
class Animals {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sing() {
    return `${this.name} bisa nyanyi`;
  }

  dance() {
    return `${this.name} bisa nari`;
  }
}

class Cats extends Animals {
  constructor(name, age, whiskerColor) {
    super(name, age);
    this.whiskerColor = whiskerColor;
  }

  whiskers() {
    return `Warna kumisku adalah ${this.whiskerColor}`;
  }
}

const jukut = new Cats("Clara", 33, "pelangi");
console.log(jukut);
