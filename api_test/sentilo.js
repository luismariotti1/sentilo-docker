const request = require('request');

let newtemp = 38;

var options = {
  'method': 'PUT',
  'url': 'http://localhost:8081/data/utfpr/temp/'+newtemp,
  'headers': {
    'IDENTITY_KEY': '1a4aaf7eb1eba806dad56ccfa00dadae0cbe002d6fd79dd32a442f97ac5249f9'
  }
};

// repeat a request every 10 seconds
setInterval(function () {
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(options);
    newtemp = 38 + Math.floor(Math.random() * 7) - 3;;
    options.url = 'http://localhost:8081/data/utfpr/temp/'+newtemp;
  });
}, 5000);