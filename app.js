const robot = require("robotjs")
const express = require('express')
const app = express()

app.get('/play-pause', (req, res) => {
  robot.keyTap("space");
  res.send('ok');
})
app.get('/volume-up', (req, res) => {
  robot.keyTap('up');
  res.send('ok');
})
app.get('/volume-down', (req, res) => {
  robot.keyTap('down');
  res.send('ok');
})
app.get('/rewind', (req, res) => {
  robot.keyTap('left');
  res.send('ok');
})
app.get('/fast-forward', (req, res) => {
  robot.keyTap('right');
  res.send('ok');
})
app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'))

app.listen(3000, () => console.log(`listening at http://localhost:3000`))