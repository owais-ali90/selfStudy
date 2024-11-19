//Question: Write code to access the second item in the fruits array.//

const fruits = ['apple', 'banana', 'guava', 'watermelon', 'tomato', 'mango']
console.log('Second fruit in fruit list: ' + fruits[1]+ '\n')

//Question: Use a forEach loop to print each item in the fruits array.
console.log('Fruits: ')
fruits.forEach(ele => { console.log(ele)})

//Question: Add Orange to the end of the fruits array.
console.log('\nFruits: ' + fruits)
console.log('Add a new fruit in the last')
fruits.push('orange')
console.log('Fruits after: ' + fruits+ '\n')

//Question: Remove the first item (Apple) from the fruits array.
console.log('Fruits before: ' + fruits)
console.log('Removed first fruit')
fruits.shift()
console.log('Fruits after: ' + fruits+ '\n')

//Question: Add Grapes to the beginning of the fruits array. 
console.log('Fruits before: ' + fruits)
console.log('Added a new fruit in the begining')
fruits.unshift('grapes')
console.log('Fruits after: ' + fruits+ '\n')

//Question: Remove the last item (Orange) from the fruits array.
console.log('Fruits before: ' + fruits)
fruits.pop()
console.log('Removed last fruit')
console.log('Fruits after: ' + fruits+ '\n')

//Question: Create a new array by adding Cherry and Peach to the existing fruits

const updatedFruits = fruits.slice(0)
updatedFruits.splice(updatedFruits.length, 0, 'cherry', 'peach')
console.log('Fruit list with extra fruits: ' + updatedFruits+ '\n')

//Question: Use splice to remove Banana from the fruits array (assume it is in the second position)
console.log('Fruits before: ' + fruits)
fruits.splice(1, 1)
console.log('Removed second fruit')
console.log('Fruits after: ' + fruits + '\n')

//Question: Use splice to insert Pineapple at the second position in the fruits array.
console.log('Fruits before: ' + fruits)
fruits.splice(1, 0, 'pineappe')
console.log('Inserted Pineapple at the second position')
console.log('Fruits after: ' + fruits + '\n')

//Question: Use slice to create a new array with the first two items of the fruits array.
const twoFruits = fruits.slice(0, 2)
console.log('First two fruits in fruit list: ' + twoFruits + '\n')

//Question: Find the index of Mango in the fruits array
console.log('Index of mango in fruit list: ' + fruits.indexOf('mango') + '\n')

//Question: Check if Banana exists in the fruits array using includes. Answer:
console.log(`does Banana exist in the fruit list? ${fruits.includes('banana')?"Yes":"No"} \n`)

//Question: Use find to locate the first fruit in the fruits array that starts with M.
console.log(`Fruit starting with "M" : ${fruits.find(ele => ele[0] === 'm')}\n`)

//Question: Use filter to create a new array with fruits that have more than 5 letters.
const fruitsMoreT5 = fruits.filter(ele => ele.length > 5)
console.log('Fruits with length more than 5 characters: ' + fruitsMoreT5 + '\n')

//Question: Sort the fruits array alphabetically.
console.log('Fruits before: ' + fruits)
fruits.sort()
console.log('sorted')
console.log('Fruits after: ' + fruits + '\n')

//Question: Reverse the fruits array.
console.log('Fruits before: ' + fruits)
fruits.reverse()
console.log('reversed')
console.log('Fruits after: ' + fruits + '\n')

//Question: Use reduce to create a single string from the fruits array, with items separated by a comma and a space (, ).
let fruitString = fruits.reduce((str, ele) => str+', '+ele)
console.log('All fruits in a String: ' + fruitString + '\n')

//Question: Use map to create a new array where each fruit is in uppercase.
let fruitsInUpper = fruits.map(ele => ele.toUpperCase())
console.log('Fruits in UpperCase: ' + fruitsInUpper + '\n')

//Question: Combine all the methods you've learned to:
// Add Kiwi at the start.
// Remove Mango from the array.
// Sort the remaining fruits alphabetically.


console.log('Fruits before: ' + fruits)
fruits.unshift('Kiwi')
console.log('added kiwi at start')
fruits.splice(fruits.indexOf('mango'), 1)
console.log('removed mango')
console.log('sorted')
console.log('Fruits after: ' + fruits + '\n')

// Bonus Questions
// Question: Flatten a nested array [1, [2, 3], [4, [5, 6]]] using flat. 
let anArray = [1, [2, 3], [4, [5, 6]]]
console.log('Array before: ', anArray)
anArray = anArray.flat(Infinity)
console.log('flattened array ' )
console.log('Array after: ', anArray, '\n')


// Question: Use join to create a string from the fruits array with items separated by a hyphen (-). Answer:
let hyphenSepStr = fruits.join('-')
console.log('Hyphen seprated fruit string: ' + hyphenSepStr )