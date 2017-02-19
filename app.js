var express = require('express');
var app = express();

//a time utility
var moment = require('moment');

app.set('port', (process.env.PORT || 5000));

app.get('/:string', function(req, res){

  var date = moment(req.params.string);
  var unix = parseInt(date.format('X'));
  var natural = null; //default to null
  if (unix){
    natural = date.format("MMMM DD, YYYY");
  }

  res.json({ 'unix': unix, 'natural': natural });

});

app.listen(app.get('port'), function(){
  console.log('Example app running on port '+app.get('port'));
});
