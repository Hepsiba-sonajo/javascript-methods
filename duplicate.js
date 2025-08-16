
function duplicate(arr){
//  let result =[...new Set(arr)];
//  console.log(result)


let result = arr.filter((num,index) => arr.indexOf(num) === index)  
console.log(result)
}





let arr = [ 7, 4, 6, 9, 5, 3 ,7]
duplicate(arr)