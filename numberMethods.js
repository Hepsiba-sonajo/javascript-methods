// Number Methods

var input = 37;

// Convert to string
var str = input.toString();
console.log("String representation:", str); // "37"
console.log("Type of str:", typeof str); // "string"
// Convert to number
var num = Number(str);
console.log("Number representation:", num); // 37
console.log("Type of num:", typeof num); // "number"
// Convert to integer
var intNum = parseInt(str);
console.log("Integer representation:", intNum); // 37
console.log("Type of intNum:", typeof intNum); // "number"
// Convert to float
var floatNum = parseFloat(str);
console.log("Float representation:", floatNum); // 37
console.log("Type of floatNum:", typeof floatNum); // "number"
// Convert to fixed-point notation
var fixedNum = num.toFixed(2);
console.log("Fixed-point notation:", fixedNum); // "37.00"
// Convert to exponential notation
var expNum = num.toExponential(2);
console.log("Exponential notation:", expNum); // "3.70e+1"
// Convert to precision
var precisionNum = num.toPrecision(3);
console.log("Precision representation:", precisionNum); // "37.0"
// Convert to locale string
var localeNum = num.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
console.log("Locale string representation:", localeNum); // "$37.00"
// Check if a value is finite
console.log("Is finite:", Number.isFinite(num)); // true
// Check if a value is NaN
console.log("Is NaN:", Number.isNaN(num)); // false
// Check if a value is an integer
console.log("Is integer:", Number.isInteger(intNum)); // true
//valueOf
console.log("Value of num:", num.valueOf()); // 37