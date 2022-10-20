const axios = require('axios');
const path = require('path');
const https = require('https');
const rootCas = require('ssl-root-cas').create();


rootCas.addFile(path.resolve(__dirname, '../certs/ca/ca-cert.pem'));
const httpsAgent = new https.Agent({ca: rootCas});

let newtemp = 38;

const config = {
  headers:{
    'IDENTITY_KEY': '42755a1e9a456c888480af5c889f34b3ddce3cb21d3f042a367fbf5ec5e5903f'
  }
};

axios.


// repeat a request every 10 seconds
setInterval(function () {
  axios.get('https://localhost/data/utfpr/temp/'+newtemp, { httpsAgent })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}, 5000);


// request(options, function (error, response) {
//   if (error) throw new Error(error);
//   console.log(options);
//   newtemp = 38 + Math.floor(Math.random() * 7) - 3;;
//   options.url = 'https://localhost/data/utfpr/temp/'+newtemp;
// });