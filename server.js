const express = require('express')
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app = express()
app.get('/', (req, res) => {
  res.send('HEY!')
})
app.listen(3000, () => console.log('Server running on port 3000'))