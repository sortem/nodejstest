const express = require('express')
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const db = require('./config/db');
const app = express()

app.use(bodyParser.urlencoded({ extended: true }));
MongoClient.connect(db.url, (err, database) => {
	if (err) return console.log(err)
	require('./app/routes')(app, database);
	app.listen(3000, () => console.log('Server running on port 3000'))
})