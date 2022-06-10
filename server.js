var express                               = require('express');
var app                                   = express();

const readerCache                         = require('./readers/reader_cache');
const modelNews                           = require('./models/model_news');
const errors                              = require('./constants/errors');
const { body, param, validationResult }   = require('express-validator');

app.get('/', function (req, res) {

   res.send('Hello World of news');

})

app.get('/newslist', function (req, res) {
   
   const cache                            = readerCache.readString("cache/news.json");
   const list                             = modelNews.getList(cache);
   res.send(list);

})

app.get('/newsdetail/:id', function (req, res) {

   if(isNaN(req.params.id)) {
      res.status(400).send(new Error(errors.ERROR_BAD_REQUEST))
      return;
   }

   const cache                            = readerCache.readString("cache/news.json");
   const detail                           = modelNews.getDetail(cache, req.params.id);
   console.log("detail", detail);

   res.send(detail);

})

var server = app.listen(8081, function () {

   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)

})