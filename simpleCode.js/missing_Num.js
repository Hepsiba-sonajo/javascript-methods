

function missing_Num(input){
  const min = Math.min(...input);
  const max = Math.max(...input);
  console.log(max);
  let missing = [];
  let missingSet = new Set(input)

  for(i=min; i<max; i++){
    if(!missingSet.has(i)){
        missing.push(i)
    }
  }
//return missing;
console.log(missing);

}


let input = [1,2,3,4,6,8,9]
missing_Num(input);