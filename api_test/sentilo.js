const axios = require('axios');
const https = require('https');


// configure https agent to ignore self-signed certificate
const httpsAgent = new https.Agent({
  rejectUnauthorized: false
});

// configure axios
const axiosInstance = axios.create({
  httpsAgent,
  headers: {'IDENTITY_KEY': '563093ec5252147edc8860c2d667be5db0c010325b6953ed5b323724bcc00e05'}
});

// every 2 seconds make a request to the api
setInterval(() => {
  temp = randomInt(10, 40);
  axiosInstance.put('https://localhost/data/testApp_provider/temp/'+temp)
    .then(() => {
      console.log(temp);
    })
    .catch((err) => {
      console.log(err);
    });
}, 2000);

randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}