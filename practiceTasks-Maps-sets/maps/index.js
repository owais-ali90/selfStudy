
//Question: Create a Map named student with the following key-value pairs:
let student = new Map([['name', 'Alex'],['age', 19], ['grade', 'B+']])

//Question: Add a new key subject with the value "Mathematics" to the student map. Answer:
student.set(['subject', 'Mathematics'])

//Question: Retrieve the value associated with the key grade in the student map. 
console.log(`Grade ${student.get('grade')}`)

//Question: Check if the key age exists in the student map.
console.log(`Does Student map contain age key? ${student.has('age')?'Yes':'No'}`)

//Question: Remove the key grade from the student map
student.delete('grade')

//Question: Clear all key-value pairs from the student map.
student.clear()

//Question: Create a Map named countryCodes with the following entries:
// US: "United States"
// IN: "India"
// GB: "United Kingdom"
// Use a for...of loop to print all key-value pairs in the map. Answer:
let countryCodes = new Map([['US', 'United States'], ['IN', 'India'], ['GB', 'United Kingdom']])

//Question: Use the forEach method to print all keys in the countryCodes map. 
console.log('Keys in CountryCodes:')
countryCodes.keys().forEach(ele =>{console.log(ele)})

//Question: Get an array of all keys in the countryCodes map using Map.keys.
console.log(`Keys of CountryCodes: ${Array.from(countryCodes.keys())}`)

//Question: Get an array of all values in the countryCodes map using Map.
let countryCodesValues = [...countryCodes.values()]
console.log(`Values in CountryCodes: ${countryCodesValues}`)

//Question: Get an array of all key-value pairs in the countryCodes map using Map.entries.
console.log(`All key-value pairs of countryCode: ${[...countryCodes.entries()]}`)

//Question: Use a Set to remove duplicate values from the array [1, 2, 2, 3, 4, 4, 5]. 
let withoutduplicates = new Array( [1, 2, 2, 3, 4, 4, 5])

//Question: Convert the student map to an object.
let stdObj = Object.fromEntries(student)

//Create a Map from the following object: { name: "Bob", age: 25, city: "Paris" }.
let mapFromObject = new Map(Object.entries( { name: "Bob", age: 25, city: "Paris" }))

//Question: Write a function getUniqueCharacters that takes a string and returns a Set of unique characters
let  getUniqueCharacters = function(str){
    let UniqueChar = new Set()
    for(let i = 0; i < str.length; i++){
        UniqueChar.add(str[i])
    }
    return  UniqueChar
}
console.log(getUniqueCharacters('abdaacbwessghdwnsefpndh'))