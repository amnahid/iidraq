const express = require('express');
const dotEnv = require('dotenv')
const cors = require('cors');

//configuring dot env
dotEnv.config()
const {PORT} = process.env

const app = express()


// cors
app.use(cors());

app.get('/', (req, res)=>{res.send('hello world!')})


const SERVER_PORT = PORT||3000

app.listen(SERVER_PORT, ()=>{
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