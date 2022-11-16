//class Expression
const person3 = class{}

class person4 {
    constructor(fn,ln,age) {
      this.fn = fn;
      this.ln = ln;
      this.age = age;

    }

    printPerson() {
      console.log(this.fn + " " + this.ln);
    }
    calAge(birthYear) {
        console.log(2022-birthYear);
    }
}
const person4Obj = new person4("AAAa" , "DDDd" , 55)
const person4Obj1 = new person4("AAAa1" , "DDDd1" , 55)
const person4Obj2 = new person4("AAAa2" , "DDDd2" , 55)
console.log(person4Obj.fn);
person4Obj.calAge(1980) 

module.exports = person4
