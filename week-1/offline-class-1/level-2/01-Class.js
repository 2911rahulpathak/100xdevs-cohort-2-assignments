class Animal {
  constructor(name, legCount) {
    this.name = name;
    this.legCount = legCount;
  }
  describe() {
    return `${this.name} has ${this.legCount} legs`;
  }
}
/* 
Without having static methods you cannot directly call method of class
class Animal{
  constructor(name,legCount,speaks){
    this.name=name;
    this.legCount=legCount;
    this.speaks=speaks;
  }
  static myType(){
    console.log("Animal");
  }
  speak(){
    console.log("hi there" + this.speaks)
  }
}
console.log(Animal.myType())
//This won't work
//console.log(Animal.speak());
let dog = new Animal("dog",4,"bhow bhow");

*/
