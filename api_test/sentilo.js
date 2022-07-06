const request = require('request');

let newtemp = 38;

var options = {
  'method': 'PUT',
  'url': 'http://localhost:8081/data/utfpr/temp/'+newtemp,
  'headers': {
    'IDENTITY_KEY': '91dd94e8f3a86cb485e07ef9c204eeb7be6166bbbc7bfdfd3966d569dc4ff4c1'
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