// Js Array Methods

var arr = [1, 2, 3, 4, 5];

console.log(arr.length); // Returns the length of the array
console.log(arr[0]); // Returns the first element of the array
console.log(arr.slice(1, 3)); // Returns a shallow copy of a portion of the array from index 1 to 3 (exclusive)
console.log(arr.splice(1, 3)); // Removes 2 elements starting from index 1 and returns them
console.log(arr.concat([6, 7,6,9,3,7])); // Concatenates another array to the original array
console.log(arr.join(", ")); // Joins the elements of the array into a string, separated by ", "
console.log(arr.push(8)); // Adds an element to the end of the array and returns the new length
console.log(arr.pop()); // Removes the last element from the array and returns it
console.log(arr.shift()); // Removes the first element from the array and returns it    
console.log(arr.unshift(0)); // Adds an element to the beginning of the array and returns the new length
console.log(arr.toString()); // Converts the array to a string
console.log(arr); // Returns the array itself
console.log(arr.at()); // Returns the last element of the array (same as arr[arr.length - 1])
console.log(arr.copyWithin());// Copies a sequence of elements within the array to another location in the same array
console.log(arr.fill(9)); // Fills the array with a static value (9 in this case)
console.log(arr.flat()); // Flattens nested arrays into a single array

//Array search methods

var arr = [1, 2, 3, 4, 5 , 3, 6, 7, 3];
console.log(arr.indexOf(3)); // Returns the index of the first occurrence of 3
console.log(arr.lastIndexOf(3)); // Returns the index of the last occurrence of 3
console.log(arr.includes(3)); // Checks if 3 is present in the array
console.log(arr.find((element) => element > 3)); // Returns the first element that satisfies the condition (greater than 3)
console.log(arr.findIndex((element) => element > 3)); // Returns the index of the first element that satisfies the condition (greater than 3)
console.log(arr.findLast((element) => element > 3)); // Returns the last element that satisfies the condition (greater than 3)
console.log(arr.findLastIndex((element) => element > 3)); // Returns the index of the last element that satisfies the condition (greater than 3)


// Array iteration methods
console.log(arr.forEach((element) => console.log(element+2))); // Executes a function for each element in the array
console.log(arr.map((element) => element * 2)); // Creates a new array with the results of calling a function on every element in the array
 console.log(arr.filter((element) => element > 3)); // Creates a new array with all elements that satisfy the condition (greater than 3)
console.log(arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0)); // Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value
console.log(arr.reduceRight((accumulator, currentValue) => accumulator + currentValue, 0)); // Applies a function against an accumulator and each element in the array (from right to left) to reduce it to a single value
console.log(arr.some((element) => element > 3)); // Checks if at least one element satisfies the condition (greater than 3)
 console.log(arr.every((element) => element > 0)); // Checks if all elements satisfy the condition (greater than 0)


// Array sorting methods
console.log(arr.sort((a, b) => a - b)); // Sorts the array in ascending order
console.log(arr.sort((a, b) => b - a)); // Sorts the array in descending order
console.log(arr.reverse()); // Reverses the order of the elements in the array
console.log(arr.toSorted()); // Returns a new array with the elements sorted in ascending order without modifying the original array
console.log(arr.toReversed()); // Returns a new array with the elements in reverse order without modifying the original array

// Array grouping methods
console.log(arr.group((element) => element % 2 === 0 ? 'even' : 'odd')); // Groups the elements based on a condition (even or odd)       
console.log(arr.groupToMap((element) => element % 2 === 0 ? 'even' : 'odd')); // Groups the elements into a Map based on a condition (even or odd)
console.log(arr.at(2)); // Returns the element at index 2


//set methods
let mySet = new Set([1, 2, 3, 4, 5]);     
console.log(mySet.size); // Returns the number of elements in the set
console.log(mySet.has(3)); // Checks if the set contains the element 3
console.log(mySet.add(6)); // Adds the element 6 to the set and returns the set itself
console.log(mySet.delete(2)); // Deletes the element 2 from the set and returns true if successful
console.log(mySet.clear()); // Removes all elements from the set
console.log(mySet.values()); // Returns an iterator of the values in the set
console.log(mySet.keys()); // Returns an iterator of the keys in the set (same as values)
console.log(mySet.entries()); // Returns an iterator of the key-value pairs in the set
console.log(mySet.forEach((value) => console.log(value))); // Executes a function for each value in the set

// Map methods
let myMap = new Map([['key1', 'value1'], ['key2', 'value2']]);
console.log(myMap.size); // Returns the number of key-value pairs in the map
console.log(myMap.has('key1')); // Checks if the map contains the key 'key1'
console.log(myMap.get('key1')); // Returns the value associated with the key 'key1'

//spread operator
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2]; // Combines two arrays using the spread operator
console.log(combined); // [1, 2, 3, 4, 5, 6]

// Rest operator
function sum(...args) { // Uses the rest operator to collect all arguments into an array
    return args.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4)); // Returns the sum of all arguments (10)


// Array destructuring
let arr = [1, 2, 3, 4, 5];
let [first, second, ...rest] = arr; // Destructures the array into variables
console.log(first); // 1
console.log(second); // 2

//Numeric sorting
let numbers = [10, 5, 100, 50];
console.log(numbers.sort((a, b) => a - b)); // Sorts the array in ascending order
console.log(numbers.sort((a, b) => b - a)); // Sorts the array in descending order
console.log(numbers.sort((a, b) => a.toString().localeCompare(b.toString()))); // Sorts the array as strings
//math.min
console.log(Math.min(...numbers)); // Returns the minimum value in the array
//math.max
console.log(Math.max(...numbers)); // Returns the maximum value in the array
Array.from
let str = "Hello";
let arrFromStr = Array.from(str); // Converts a string to an array of characters
console.log(arrFromStr); // ['H', 'e', 'l', 'l', 'o']


//math methods
console.log(Math.abs(-5)); // Returns the absolute value of -5 (5)
console.log(Math.ceil(4.2)); // Returns the smallest integer greater than or equal to 4.2 (5)
console.log(Math.floor(4.8)); // Returns the largest integer less than or equal to 4.8 (4)
console.log(Math.round(4.5)); // Returns the value of 4.5 rounded to the nearest integer (5)
console.log(Math.random()); // Returns a random number between 0 (inclusive) and 1 (exclusive)
console.log(Math.pow(2, 3)); // Returns 2 raised to the power of 3 (8)
console.log(Math.sqrt(16)); // Returns the square root of 16 (4)
console.log(Math.min(1, 2, 3, 4, 5)); // Returns the minimum value among the arguments (1)
console.log(Math.max(1, 2, 3, 4, 5)); // Returns the maximum value among the arguments (5)
console.log(Math.PI); // Returns the value of π (3.141592653589793)
console.log(Math.E); // Returns the value of e (2.718281828459045)





