class Person {
  contructor(age) {
    this.age = age;
  }

  showAge() {
    console.log(this.age);
  }
}

var makeSomeoneOlder = person => person.age += 10;

var person = new Person(18);
person.showAge();
makeSomeoneOlder(person);
person.showAge();
