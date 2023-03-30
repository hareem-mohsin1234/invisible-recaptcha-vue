const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors')
const path = require('path')
const captcha = require('./controllers/captcha')
const form = require('./controllers/form')

require('dotenv').config({ path: path.resolve(__dirname, '.env') });

app.use(cors())
app.use(bodyParser.json({ limit: '10mb' }));

app.use(captcha)
app.use(form)
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  // require('./tools/update.fields');
  console.log('App is running on port:%d ', PORT);
});

module.exports = app;
