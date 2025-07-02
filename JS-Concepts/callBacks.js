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

