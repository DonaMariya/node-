console.log(__dirname,__filename);
class Person{
    constructor(name,age)
    {
        this.name=name;
        this.age=age;

    }
    hello(){
        console.log(`Name: ${this.name} , Age : ${this.age}`)
    }
}
module.exports = Person;
