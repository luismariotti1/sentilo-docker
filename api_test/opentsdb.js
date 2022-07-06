const request = require('request');

let newtemp = 38;


var options = {
  'method': 'POST',
  'url': 'http://localhost:4242/api/put?details',
  'headers': {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify([
    {
      "metric": "room_temperature",
      "timestamp": Math.floor(new Date().getTime() / 1000),
      "value": 38 + Math.floor(Math.random() * 7) - 3,
      "tags": {
        "floor": "1",
        "room_no": "10"
      }
    },{
      "metric": "room_temperature",
      "timestamp": Math.floor(new Date().getTime() / 1000),
      "value": 38 + Math.floor(Math.random() * 7) - 3,
      "tags": {
        "floor": "1",
        "room_no": "11"
      }
    }
  ])
};



function change_values(){
  options.body = JSON.stringify([
    {
      "metric": "room_temperature",
      "timestamp": Math.floor(new Date().getTime() / 1000),
      "value": 38 + Math.floor(Math.random() * 7) - 3,
      "tags": {
        " ": "1",
        "room_no": "10"
      }
    },{
      "metric": "room_temperature",
      "timestamp": Math.floor(new Date().getTime() / 1000),
      "value": 38 + Math.floor(Math.random() * 7) - 3,
      "tags": {
        "floor": "1",
        "room_no": "11"
      }
    }
  ]);
}

// repeat a request every 10 seconds
setInterval(function () {
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(options.body);
    change_values();
  });
}, 5000);
