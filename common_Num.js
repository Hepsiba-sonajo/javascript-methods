// Common Element of two Arrays

// By using Filter

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [4, 5, 6, 7, 8];

const common = arr1.filter(value => arr2.includes(value));

console.log("Common elements:", common);
 
//By using Set

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [4, 5, 6, 7, 8];

const set2 = new Set(arr2);
const common = arr1.filter(value => set2.has(value));

console.log("Common elements:", common);
