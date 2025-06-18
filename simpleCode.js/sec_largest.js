

function second_largest(arr){
   let max = Math.max(...arr);
   console.log(max);
   let output = arr.find((value) => value < max);
   console.log(output);
}


let arr = [ 7, 4, 6, 9, 5, 3 ]
second_largest(arr);