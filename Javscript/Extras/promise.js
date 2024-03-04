
console.log('Learn With us');
const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = {
        name: "Javacript",
        coding: 'yes',
      };
      resolve(data);
    }, 2000);
  });
  
  fetchData
    .then((data) => {
      console.log("Fetched data:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });



// function fetchData() {
//     return new Promise(function(resolve, reject) {
//       setTimeout(function() {
//         const data = "Yes Welcome to Learn With Us";
//         resolve(data);
//       }, 2000);
//     });
//   }
  
//   fetchData()
//     .then(function(data) {
//       console.log("Received data: " + data);
//     })
//     .catch(function(error) {
//       console.error("Error: " + error);
//     });
  