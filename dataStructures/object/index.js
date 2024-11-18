// Object literal method of making object
const person = {
    name: "John",
    age: 30,
    greet: function() {
        console.log(`Hello, my name is ${this.name}.`);
    },
    haveBirthday: function() {
        this.age += 1;
        console.log(`Happy Birthday! I am now ${this.age} years old.`);
    }
};

person.greet();
person.haveBirthday(); 

//Object Constructer to make object
let car = new Object()
car.modal = 1999
console.log('car: ' + car)

//get entries of object
console.log(Object.entries(person));

//get keys of object
console.log(Object.keys(person)); 

//get values of objects
console.log(Object.values(person)); 

//copying properties of one object to other object
const target = { a: 1 };
const source = { b: 2, c: 3 };
Object.assign(target, source);
console.log(target); 