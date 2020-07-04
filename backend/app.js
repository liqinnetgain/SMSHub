const express = require('express')
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

app.all('*', function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
const data = [
  {"message": "hola mundo!", "number": "6591550473", "messageId": "1"},
  {"message": "hello world!", "number": "6594452390", "messageId": "2"}
]

app.post('/send_api', function(req, res){
  if(req.body.deviceId && req.body.action.toUpperCase() == 'SEND'){
    let message = getlist(req.body.messageId)
    res.send(message)
  }else{
    res.send(req.body)
  }
})

app.post('/status_api', (req, res) => {
  if(req.body.deviceId && req.body.messageId
    && req.body.status && req.body.action.toUpperCase() == 'STATUS'){
    res.send(200, 'Not implemented')
  }else{
    res.send(req.body)
  }
})

app.post('/received_api', (req, res) => {
  if(req.body.deviceId && req.body.message
    && req.body.number && req.body.action.toUpperCase() == 'RECEIVED'){
    res.send(200, 'Not implemented')
  }else{
    res.send(req.body)
  }
})

function getlist(id){
  let retval = {}
  data.forEach(l => {
    if(l.messageId == id){
      retval=l
    }
  })
  return retval
}

app.listen(8080, () => {
  console.log('http://localhost:8080');
})
