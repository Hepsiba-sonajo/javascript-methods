
function palindrome(value){
  console.log(value);
    let input = value.split('').reverse().join('');
  console.log(input);
    if(input == value){
        console.log(true)
    } else {
        console.log(false)
    }


}



palindrome('12321');