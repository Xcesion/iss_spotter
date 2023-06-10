// index.js
const { fetchCoordsByIP } = require('./iss');

fetchCoordsByIP("42", (error, coordinates) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned coordinates:' , coordinates);
});



