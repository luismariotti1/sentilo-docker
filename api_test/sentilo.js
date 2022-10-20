const axios = require('axios');
const https = require('https');


// configure https agent to ignore self-signed certificate
const httpsAgent = new https.Agent({
  rejectUnauthorized: false
});

// configure axios
const axiosInstance = axios.create({
  httpsAgent,
  headers: {'IDENTITY_KEY': '42755a1e9a456c888480af5c889f34b3ddce3cb21d3f042a367fbf5ec5e5903f'}
});

// every 2 seconds make a request to the api
setInterval(() => {
  temp = randomInt(10, 40);
  axiosInstance.put('https://localhost/data/utfpr/temp/'+temp)
    .then(() => {
      console.log(temp);
    })
}, 2000);

randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}