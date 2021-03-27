'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.json(["dasdjakshdas","asdkasldhjas","aklsdjlaoqiwed","aklsjdoqwielk12","aklsjdoqwielk12"]);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

