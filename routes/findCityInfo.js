const express = require('express');
const router = express.Router();
const request = require('request-promise');
const keys = require('../env.json')
// const keys  = JSON.parse(envJsonData)


router.post('/', function(req, res){

  const locationKey = req.body.locationKey;
  let returnData = {};
  returnData['locationName'] = req.body.locationName;
  returnData['locationState'] = req.body.locationState;
  request.get(
      'http://dataservice.accuweather.com/locations/v1/'+locationKey+'?apikey='+keys.api_key+'&language=en-us&details=true',
      function (error, response, body) {
          if (!error && response.statusCode == 200) {
              let obj = JSON.parse(body)
              returnData['geoLocation'] = obj
          }
          else{
            return error
          }
      })
      .then(function(){
        request.get(
            'http://dataservice.accuweather.com/currentconditions/v1/'+locationKey+'?apikey='+keys.api_key+'&language=en-us&details=true',
            function (error, response, body) {
                if (!error && response.statusCode == 200) {
                  let obj = JSON.parse(body)
                  returnData['tempature'] = obj
                  res.send(returnData)
                }
                else{
                  return error
                }
            })
      })
})



module.exports = router;
