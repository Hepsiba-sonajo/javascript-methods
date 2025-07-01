var array = [1,2,3,4,5,6,7]

//For loop
for(var i=0; i<array.length; i++){
    //console.log(array[i]);
    
}

//For Each
array.forEach(element => {
  //console.log(element);  
 
});

//Map
// let result = array.map( (element) => {
//     return element * 2;
   
// })
//console.log(result);
//Filter
// let result = array.filter((item,index) => {
//     return item > 2;
//      })
//     console.log(result);

//Find
//let result = array.find( (item) => {
// return (item > 3);
// });
//console.log(result);


//Reduce
// let result = array.reduce( (acc , current) => {
//     return acc + current;
    
// })
// console.log(result); // 28

//Spread

var number = [1,2,3,4,5,6,7]
//console.log(...number);


//Rest
function sum(...numbers) {
    console.log(numbers);
  return numbers.reduce((total, num) => total + num, 0);
}
console.log("Rest + Reduce:", sum(1, 2, 3, 4)); // 10


//Restructuring
var number = [1,2,3,4,5,6,7]
console.log(number[1]);
const [one , two] = number;
console.log(one);

// Arrow Function
function a(input){
   
 var x = input +1; 
   console.log(x);
}


const b = (input) => {
      var x = 2 +1; 
   console.log(x)
}

var input = 2;

 a(input)
 b(input)