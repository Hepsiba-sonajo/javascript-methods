//callback
// function fetchData(callback) {
//   setTimeout(() => {
//     const error = false;
//     if (error) {
//       callback("Something went wrong", null);
//     } else {
//       callback(null, "Data loaded");
//     }
//   }, 1000);
// }

// fetchData(function(err, data) {
//   if (err) {
//     console.error(err); // Something went wrong
//   } else {
//     console.log(data);
//   }
// });


//Promises
function fetchData() {
  return new Promise((resolve, reject) => {
    const error = true;
    setTimeout(() => {
      if (error) {
        reject("Something went wrong");
      } else {
        resolve("Data loaded");
      }
    }, 1000);
  });
}

fetchData()
  .then(data => console.log(data))
  .catch(err => console.error(err)); // Something went wrong


  //Async/Await
  function fetchData() {
  return new Promise((resolve, reject) => {
    const error = true;
    setTimeout(() => {
      if (error) {
        reject("Something went wrong");
      } else {
        resolve("Data loaded");
      }
    }, 1000);
  });
}

async function getData() {
  try {
    const result = await fetchData();
    console.log(result);
  } catch (err) {
    console.error(err); // Something went wrong
  }
}

getData();



//Callback hell
function step1(result1) {
  doTask2(result1, step2);
}

function step2(result2) {
  doTask3(result2, step3);
}

function step3(result3) {
  doTask4(result3, finalStep);
}

function finalStep(result4) {
  console.log(result4);
}

doTask1(step1);

//Promises
doTask1()
  .then(result1 => doTask2(result1))
  .then(result2 => doTask3(result2))
  .then(result3 => doTask4(result3))
  .then(finalResult => console.log(finalResult))
  .catch(err => console.error(err));
// Use Async/Await

async function runTasks() {
  try {
    const result1 = await doTask1();
    const result2 = await doTask2(result1);
    const result3 = await doTask3(result2);
    const finalResult = await doTask4(result3);
    console.log(finalResult);
  } catch (err) {
    console.error(err);
  }
}

runTasks();

