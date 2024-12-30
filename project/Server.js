const express = require('express');
const { initial } = require('./controlller/Authcontrol');
const app = express();
app.use('/Auth',initial)
app.listen(7000, () => {
  console.log('server 7000 started');
});
