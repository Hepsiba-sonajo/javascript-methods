


function dec_Bin(input){
   
 //let result = (Math.floor(input / 2)) + (input % 2); or
 //let result = input.toString(2); or

 let remainders = [];
 while(input > 0){
   remainders.push(input%2);
   input =Math.floor(input/2);
   console.log(input)
 }
let result = remainders.reverse().join('');

 console.log(result);     
}





let input = 25;
dec_Bin(input);
