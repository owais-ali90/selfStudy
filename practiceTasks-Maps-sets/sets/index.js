//Question: Create a Set named numbers containing the values 1, 2, 3, 4, 5.
let numbers = new Set([1, 2, 3, 4, 5])

//Question: Add the value 6 to the numbers set.
numbers.add(6)

//Question: Check if the value 3 exists in the numbers set.
console.log('Does numbers contain 3? ' + numbers.has(3))

//Question: Remove the value 2 from the numbers set.
numbers.delete(2)

//Question: Clear all values from the numbers set.
numbers.clear()

//Question: Create a Set of fruits ['Apple', 'Banana', 'Mango']. Use a for...of loop to print each fruit.
let fruits = ['Apple', 'Banana', 'Mango']
for(const fruit of fruits){
    console.log(fruit)
}


//Question: Use the forEach method to print each value in the numbers set
numbers = new Set([1, 2, 3, 4, 5])
for(const num of numbers.values()){
    console.log(num)
}

//Question: Create two sets, setA = [1, 2, 3] and setB = [3, 4, 5]. Find their union. 
const setA = new Set([1, 2, 3])
const setB = new Set([3, 4, 5])
const union = setA.union(setB)
console.log(`Union of Set A and B `)
for(const num of union){
    console.log(num)
}

//Question: Find the intersection of setA and setB9
const inter = setA.intersection(setB)
console.log(`Intersection of Set A and B`)
for(const num of inter){
    console.log(num)
}

//Question: Find the difference between setA and setB (values in setA but not in setB). 
const AdiffB = setA.difference(setB)
console.log('A-B: A difference B')
for(const num of AdiffB){
    console.log(num)
}