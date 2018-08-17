const express = require('express');
const app = express();
const request = require('request');
const path = require('path');
const cors = require('cors')

app.use(cors());

app.get('/data', function(req, res){
  request('http://history.muffinlabs.com/date', function(error, response, body){
    if(!error && response.statusCode === 200){
      const data = JSON.parse(body);
      res.json(data);
    }
  });
});

app.listen(3001, function () {
  console.log('App running on port ' + this.address().port);
});
//server.
