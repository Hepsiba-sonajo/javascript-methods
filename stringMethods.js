let str = "Hello, World!";

// String methods in JavaScript
console.log(str.length); // Returns the length of the string
console.log(str.charAt(0));// Returns the character at index 0
console.log(str.charCodeAt(0)); // Returns the Unicode value of the character at index 0
console.log(str.at(0)); // Returns the character at index 0 (same as charAt)
console.log(str[2]); // Returns the index of the first occurrence of "World"
console.log(str.slice(0,4)); // Returns a substring from index 0 to 4 (exclusive)
console.log(str.substring(0,4)); // Returns a substring from index 0 to 4 (exclusive)
let result = str.substr(0,4); // deprecated, but still works
console.log(result); // Returns a substring from index 0 with length 4
console.log(str.toLocaleLowerCase()); // Converts the string to lowercase, respecting locale-specific rules.
console.log(str.toLocaleUpperCase()); // Converts the string to uppercase,respecting locale-specific rules. 
console.log(str.toLowerCase()); // Converts the string to lowercase
console.log(str.toUpperCase()); // Converts the string to uppercase
console.log(str.concat(" How are you?")); // Concatenates another string to the original string
console.log(str.trim()); // Removes whitespace from both ends of the string
console.log(str.trimStart()); // Removes whitespace from the start of the string
console.log(str.trimEnd()); // Removes whitespace from the end of the string
console.log(str.replace("World", "Universe")); // Replaces "World" with "Universe"
console.log(str.replaceAll("o", "0")); // Replaces all occurrences of "o" with "0"
console.log(str.split("")); // Splits the string into an array using ", " as the delimiter
console.log(str.padStart(20, " ")); // Pads the string to a length of 20 with spaces at the start
console.log(str.padEnd(20, " ")); // Pads the string to a length of 20 with spaces at the end

// String search methods
console.log(str.indexOf("World")); // Returns the index of the first occurrence of "World"
console.log(str.lastIndexOf("o")); // Returns the index of the last occurrence of "o"
console.log(str.includes("World")); // Checks if "World" is present in the string
console.log(str.startsWith("Hello")); // Checks if the string starts with "Hello"
console.log(str.endsWith("!")); // Checks if the string ends with "!"
console.log(str.search("World")); // Returns the index of the first occurrence of "World" (similar to indexOf)
console.log(str.match(/o/g)); // Returns an array of all occurrences of "o" in the string   
console.log(str.matchAll(/o/g)); // Returns an iterator of all occurrences of "o" in the string


