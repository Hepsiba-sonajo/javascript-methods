
//date methods
let date = new Date(); // Creates a new Date object with the current date and time
console.log(date); // Displays the current date and time
console.log(date.getFullYear()); // Returns the year (4 digits)
console.log(date.getMonth()); // Returns the month (0-11, where 0 is January)
console.log(date.getDate()); // Returns the day of the month (1-31)
console.log(date.getDay()); // Returns the day of the week (0-6, where 0 is Sunday)
console.log(date.getHours()); // Returns the hour (0-23)
console.log(date.getMinutes()); // Returns the minutes (0-59)
console.log(date.getSeconds()); // Returns the seconds (0-59)
console.log(date.getMilliseconds()); // Returns the milliseconds (0-999)
console.log(date.getTime()); // Returns the number of milliseconds since January 1, 1970 (Unix epoch)

// Date manipulation methods
date.setFullYear(2025); // Sets the year to 2025
date.setMonth(11); // Sets the month to December (11)
date.setDate(25); // Sets the day of the month to 25
date.setHours(10); // Sets the hour to 10 AM    
date.setMinutes(30); // Sets the minutes to 30
date.setSeconds(0); // Sets the seconds to 0
date.setMilliseconds(0); // Sets the milliseconds to 0
console.log(date); // Displays the modified date

console.log(date.toISOString()); // Returns the date in ISO 8601 format (e.g., "2025-12-25T10:30:00.000Z")
console.log(date.toDateString()); // Returns the date as a human-readable string (e.g., "Thu Dec 25 2025")
console.log(date.toTimeString()); // Returns the time as a human-readable string (e.g., "10:30:00 GMT+0000 (Coordinated Universal Time)")
console.log(date.toLocaleDateString()); // Returns the date in the local format (e.g., "12/25/2025" in the US)
console.log(date.toLocaleTimeString()); // Returns the time in the local format (e.g., "10:30:00 AM" in the US)
console.log(date.toLocaleString()); // Returns the date and time in the local format (e.g., "12/25/2025, 10:30:00 AM" in the US)
console.log(date.valueOf()); // Returns the number of milliseconds since January 1, 1970 (Unix epoch) for the modified date
console.log(date.getUTCFullYear()); // Returns the UTC year (4 digits)
console.log(date.getUTCMonth()); // Returns the UTC month (0-11, where 0 is January)


// Example of creating a date from a string
let dateFromString = new Date("2025-12-25T10:30:00Z"); // Creates a Date object from a string in ISO 8601 format