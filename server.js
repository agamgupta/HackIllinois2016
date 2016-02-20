var express = require('express'),
    app = express(),
    faceDetectFlag = false,
    text = '';

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

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
