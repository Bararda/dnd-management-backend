var express = require('express')
var router = express()

// respond with "hello world" when a GET request is made to the homepage
router.get('/', function (req, res) {
  res.send('hello world')
});
