var express = require('express');
var router = express.Router();
var fs = require("fs");
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.sendFile(path.join(__dirname+'index.html'));
});

router.get('/index', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.sendFile(path.join(__dirname+'index.html'));
});

//var pt=path.join(__dirname, '../')+"views\\json"+"data.json";
//console.log(pt);
router.get('/data', function (req, res, next) {
   fs.readFile( path.join(__dirname, '../')+"docs\\json\\"+"data.json", 'utf8', function (err, data) {
      //console.log( data );
      console.log( err );
      res.end( data );

   });
})

module.exports = router;
