

function reverseString(str) {
    
    let splitedString = str.split(""); // Split the string into an array of characters
    console.log(splitedString);
    let result = splitedString.reverse().join('');
    console.log(result);

}

function reverseNum(num){
    let reverseNum = num.reverse();
    console.log(reverseNum)
}





reverseNum([1, 3 ,7]);
reverseString('Hepsi');