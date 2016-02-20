var express = require('express'),
    app = express(),
    faceDetectFlag = false,
    text = '';

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

app.set('port', (process.env.PORT || 5000));

app.get('/facedetect',function(req,res){
  res.json({
    "faceDetectFlag": faceDetectFlag
  });
});

app.post('/facedetect',function(req,res){
  if (req.query.faceDetectFlag){
    faceDetectFlag = req.query.faceDetectFlag;
    res.json({"msg":"success"});
  } else {
    res.json({"err":"failed, incorrect parameters"});
  }
});

app.get('/text',function(req,res){
  res.json({"text":text});
});

app.post('/text',function(req,res){
  if (req.body.text){
    text = req.body.text;
    res.json({"msg":"success"});
  } else {
    res.json({"err":"did not get any text"});
  }
});

app.listen(server_port, server_ip_address, function () {
  console.log( "Listening on " + server_ip_address + ", server_port " + port );
});
