let set = new Set([1, 2, 3, 4, 5]);

// add method
set.add(6);
console.log("add val to set: ", set); 

// delete method
set.delete(6);
console.log("delete value from set: ", set); 

// has method 
console.log("3 in set", set.has(3)); 
console.log("6 in set ", set.has(6)); 

// clear method 
set.clear();
console.log("set after clear: ", set); 

// set cleared new set
set = new Set([1, 2, 3, 4, 5]);

// size property (number of elements)
console.log("size of set: ", set.size); // 5

// forEach method (iterate over set)
set.forEach(value => console.log("value in set: ", value)); 

// map method (
const setMap = [...set].map((val, index) => val * index);
console.log("map method: ", setMap); 

// filter method // even values
const setFilter = [...set].filter(val => val % 2 === 0);
console.log("filter method (even values): ", setFilter);

// size property 
console.log("size of set: ", set.size); 

// convert set to array and slice
const setSlice = [...set].slice(1, 3);
console.log("slice method: ", setSlice); 

set.add(6); 
console.log("set after adding 6: ", set); 
set.delete(1); 
console.log("set after deleting 1: ", set); 