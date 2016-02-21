var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    faceDetectFlag = false,
    text = 'you did it!';

var port = process.env.PORT || 8000;

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/',function(req,res){
  res.sendFile('index.html');
});

app.get('/facedetect',function(req,res){
  res.json({
    "faceDetectFlag": faceDetectFlag
  });
});

app.post('/facedetect',function(req,res){
  if (req.query.faceDetectFlag){
    faceDetectFlag = req.query.faceDetectFlag;
    res.json({"faceDetectFlag":faceDetectFlag});
  } else {
    res.json({"err":"failed, incorrect parameters"});
  }
});

app.get('/text',function(req,res){
  res.json({
    "text":text
  });
});

app.post('/text',function(req,res){
  if (req.body.text){
    text = req.body.text;
    res.json({"text":text});
  } else {
    res.json({"err":"did not get any text"});
  }
});

app.listen(port, function () {
  console.log( "Listening on port " + port );
});
