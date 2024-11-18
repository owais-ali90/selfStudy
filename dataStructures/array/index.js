let salaryInPkr = [55000, 75000, 115000, 45000, 90000, 145000]

//Use of Map method
let salaryInUSD = salaryInPkr.map(ele => Math.round(ele/277.82))
console.log('Salaries in USD' + salaryInUSD)


//Use of filter method
//salary more than 50,000
let salaryAboveFifty = salaryInPkr.filter(ele => ele >= 50000)
console.log(salaryAboveFifty)

//Use of reduce method
// total Salary of all employee
let totalSalary = salaryInPkr.reduce((sum, ele) => sum + ele)
console.log('Total of Salaries: ' + totalSalary)

//length of arrar
console.log("Total employees: " + salaryInPkr.length)

//remove last element
salaryInPkr.pop()
console.log("After removing last element: " + salaryInPkr)

//adding an element at last
salaryInPkr.push(57000)
console.log("After adding a new element at last: " + salaryInPkr)

//remove first element
salaryInPkr.shift()
console.log("After removing first element: " + salaryInPkr)

//adding an element at begining
salaryInPkr.unshift(80000)
console.log("After adding a new element at begining: " + salaryInPkr)

// sort array in ascending order
salaryInPkr.sort((a, b)=> a - b)
console.log("Sorted Array: " + salaryInPkr)

//copt first two salaries into a new array
let newSalary = salaryInPkr.slice(0, 2)
console.log('First two salaries: ' + newSalary)

//removing a salary from a specific index and add new salary
salaryInPkr.splice(3, 1, 120000)
console.log('after replacing a salary at index three: ' + salaryInPkr)