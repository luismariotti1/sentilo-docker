const request = require('request');

let newtemp = 38;

var options = {
  'method': 'PUT',
  'url': 'https://localhost/data/utfpr/temp/'+newtemp,
  'headers': {
    'IDENTITY_KEY': '42755a1e9a456c888480af5c889f34b3ddce3cb21d3f042a367fbf5ec5e5903f'
  }
};

// repeat a request every 10 seconds
setInterval(function () {
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(options);
    newtemp = 38 + Math.floor(Math.random() * 7) - 3;;
    options.url = 'https://localhost/data/utfpr/temp/'+newtemp;
  });
}, 5000);