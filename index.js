const express = require('express');
const dotEnv = require('dotenv')
const cors = require('cors');
const route = require('./backend/routes/index')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//configuring dot env
dotEnv.config()
const { PORT } = process.env

const app = express()

// DB connect
mongoose.connect('mongodb://localhost:27017/iidraq', () => console.log('DB Connected!'));

// cors
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// ROUTERS ------->
app.use('/', route)

// server listening port
const SERVER_PORT = PORT || 3000

// server initiated
app.listen(SERVER_PORT, () => {
  console.log(`server is running on port ${SERVER_PORT}`);
})

// error handler middleware
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send({
    status: 500,
    message: err.message,
    body: {}
  });
})

/****************
basic_API_structure = {
  status:STATUS,
  message:"THIS IS A MESSAGE",
  body:{DATA}
}
****************/