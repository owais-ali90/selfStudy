//Question: Create an object person with the following properties:
// name: "John"
// age: 30
// city: "New York"

let person = {
    name: 'John',
    age: 30,
    city: 'New York'
}
console.log('person: ', person, '\n')
//Question: Access the name property of the person object and store it in a variable.

let personName = person.name
console.log('person name: ', personName, '\n')

//Question: Add a new property isMarried with the value false to the person object.
person['isMarried'] = false
console.log('Added isMarried property in person: ', person, '\n')

//Question: Delete the city property from the person object.
console.log('deleted city property from person')
delete(person['city'])
console.log('person', person, '\n')

//Question: Add a method greet to the person object that logs "Hello, my name is John" to the console when called.
person['greet'] = function(){ console.log(`Hello, my name is ${this.name}`)}
console.log('Added greet function to person')
console.log('person: ', person)

//Question: Call the greet method of the person object.
person.greet()

//Question: Write a loop to print all keys of the person object.
console.log('\nprinting keys of person')
for(let keys of Object.keys(person)){
    console.log(keys)
}

//Question: Write a loop to print all values of the person object.
console.log('\nprinting values of person')
Object.values(person).forEach(ele =>{console.log(ele)})

//Question: Use destructuring to extract the name and age properties from the person object.
console.log('\nDestructing name and age property: ')
let {name, age} = person
console.log(`Destructured variable's values: name = ${name}, age = ${age} \n`)

//Question: Provide default values for destructuring if the properties gender and city do not exist.
console.log('\nDestructing gender and city property with default values: ')
let {gender = null, city = null} = person
console.log(`Destructured variable's values: gender = ${gender}, city = ${city} \n`)

// Section 5: Advanced Operations
// Question: Create a new object student that has the same properties as person, but add an additional property grade: "A".
let student = Object.assign(person, {'grade': 'A'})
console.log('student', student, '\n')

//Question: Merge two objects obj1 = { a: 1, b: 2 } and obj2 = { b: 3, c: 4 } into a new object.
let obj1 = { a: 1, b: 2 }
let obj2 = { b: 3, c: 4 }
let newObj = Object.assign(obj1, obj2)
console.log('newObj: ', newObj, '\n')

//Question: Use Object.keys to get an array of all keys in the person object.
let objKeys = Object.keys(person)
console.log('Keys of person: ', objKeys, '\n')

//Question: Use Object.values to get an array of all values in the person object.
let objValues = Object.values(person)
console.log('Values of person: ', objValues, '\n')

//Question: Use Object.entries to get an array of key-value pairs in the person object.
let keyValuePair = Object.entries(person)
console.log('Key value pairs of person: ', keyValuePair, '\n')

//Section 6: Checking Properties
// Question: Check if the age property exists in the person object. Answer:
console.log(`Does person has age property? ${Object.hasOwn(person, 'age')? 'Yes':'No'}\n`)

// Question: Use Object.hasOwn() to check if isMarried is a direct property of person. 
console.log(`Does person has direct property of isMarried? ${Object.hasOwn(person, 'isMarried')? 'Yes':'No'}\n`)

//Section 7: Freezing and Sealing
// Question: Use Object.freeze to make the person object immutable. Try changing the age property.
// Object.freeze(person)
person.hobby = 'cricket' //it won't add as a new property
console.log(person)

//Question: Use Object.seal on the person object and add a new property salary. 

Object.seal(person)
person.age = 99
person.father = 'bilal' //it won't allow to add now property
console.log(person.age, person.father)

//Question: Write code to create a deep copy of the person object using JSON.stringify and JSON.parse.
let copyOfPerson = JSON.parse(JSON.stringify(person))
copyOfPerson.name = 'Ali'
console.log('copy of person: ', copyOfPerson, 'original person', person, '\n')

//Question: Create an array of objects representing books:
// Use filter to find all books with a price greater than 150. 
let books = [
    {title: 'abc',
    price: 1500,
    author: 'Alex'},
    {title: 'bcd',
    price: 100,
    author: 'Ben'},
    {title: 'cde',
    price: 200,
    author: 'George'},
    {title: 'def',
    price: 1200,
    author: 'Sara'},
    {title: 'efg',
    price: 2100,
    author: 'Luthar'},
]

let costlyBooks = books.filter(ele => ele.price > 150)
console.log('Costly books: ', costlyBooks)

//Question: Use map to create an array of book titles.
let bookTitles = books.map(ele => ele.title)
console.log('Titles of books: ', bookTitles)

//Question: Use reduce to calculate the total price of all books. 
let totalPrice = books.reduce((price,ele) => price += ele.price, 0)
console.log('Total cost of all books: ', totalPrice)

// Bonus Questions
// Question: Use a for...of loop to print the title and author of each book in the books array.
for(let [index, {title, author}] of Object.entries(books)){
    console.log(`${++index}: title: ${title}, author: ${author}`)
}

//Question: Write a function updateAge that takes an object and an age parameter,
// updates the object's age, and returns the updated object. 
let updateAge = function(obj, age){
    obj['age'] = age
    return obj
}
let singer = {
    name: 'Billie Eilish'
}
console.log(singer)
console.log(updateAge(singer, 32))