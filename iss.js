const request = require('request');

/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */

// const fetchMyIP = function(callback) { 
//   // use request to fetch IP address from JSON API
//   request(url, (error, response, body) => {
//     if (error) {
//       callback(error, "error occurs");
//       return;
//     }
//     if (response.statusCode !== 200) {
//       const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
//       callback(Error(msg), null);
//       return;
//     }
//     const data = JSON.parse(body);
//     // console.log(data.ip);
//     callback(null, data.ip);
//   });
// }

const fetchCoordsByIP = function(ip, callback) {
  const url = `https://freegeoip.app/json/${ip}`;
  request(url, (error, response,body) => {
    
    if (error) {
      callback(error, null);
      return;
    }
    const parsedBody = JSON.parse(body);
    console.log(parsedBody);
    // check if "success" is true or not
    if (!parsedBody.success) {
      const message = `Success status was ${parsedBody.success}. Server message says: ${parsedBody.message} when fetching for IP ${parsedBody.ip}`;
      callback(Error(message), null);
      return;
    }
    const { latitude, longitude } = parsedBody;
    callback(null, {latitude, longitude});
  });
};

module.exports = {fetchCoordsByIP };