

function fibonacci (){

    let series = [0,1];

   for(i=2; i<=10; i++){
    series.push(series[i-1]+ series[i+1])
   }
   console.log(series)
}



fibonacci ();