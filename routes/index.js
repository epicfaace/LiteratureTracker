var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', function (err) {
  if (err) console.log('Could not connect to mongodb');
  else console.log('Successfully connected to mongodb');
});

var LiteratureModel = mongoose.model('Literature', {
  type: String,
  name: String,
  author: String,
  url: String,
  image: Buffer,
  review: String
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/list', function(req, res, next) {
  LiteratureModel.find(req.query,function (err, result) {
    if(err) res.status(500).json(err);
    else {
      console.log('Rendering data from server: ', result);
      res.status(200).json(result);
    }
  });
});

router.post('/', function (req, res) {
  (new LiteratureModel(req.body)).save(function (err, result) {
    console.log('Updating database');
    if (err) res.status(500).json({message: 'Sorry! Something broke on the server!'});
    else res.status(201).json(result);
  });
});

module.exports = router;
