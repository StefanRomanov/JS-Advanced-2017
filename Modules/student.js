let Entity = require('./entity');
let Dog = require('./dog');
let Person = require('./fourth-task-person');

class Student extends Person{
    constructor(name,phrase,dog,id){
        super(name,phrase,dog);
        this.id = id;
    }

    saySomething(){
        return `Id: ${this.id} ${this.name} says: ${this.phrase}${this.dog.saySomething()}`
    }
}

module.exports = Student;