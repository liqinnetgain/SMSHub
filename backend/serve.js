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
const data = {
  code: 0,
  list: [
    {"message": "hola mundo!", "number": "6591550473", "messageId": "1"},
    {"message": "hello world!", "number": "6594452390", "messageId": "2"}
  ]
}

app.post('/send_api', function(req, res){
  if(req.body.deviceId && req.body.action){
    const data = getlist(req.body.deviceId)

    res.send(data)
  }else{
    res.send(req.body)
  }
})

app.get('/status_api', (req, res) => {
  res.send(data)
})

app.get('/received_api', (req, res) => {
  res.send(data)
})

function getlist(id){
  list.forEach(l => {
    if(l.messageId == id){
      return l
    }
  })
}

app.listen(8080, () => {
  console.log('http://localhost:8080');
})
