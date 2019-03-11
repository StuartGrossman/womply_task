var express = require('express');
var router = express.Router();
var request = require('request');
const keys = require('../env.json')
// const keys  = JSON.parse(envJsonData)


router.post('/', function(req, res){
  // console.log(req.body)
  var city = req.body.name;
  request.post(
      'http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey='+keys.api_key+'&q='+city+'&language=en-us',
      function (error, response, body) {
          if (!error && response.statusCode == 200) {
              // console.log(body, "body")
              res.send(body)
          }else{
            // console.log(error, "error")

            return error
          }
      }
  );
})



module.exports = router;
