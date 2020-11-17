const express = require('express')
const path = require('path')
const { PORT=3000, LOCAL_ADDRESS='localhost' } = process.env

express()
  .use(express.static(path.join(__dirname, 'public')))
  .listen(PORT, LOCAL_ADDRESS, () => console.log(`Listening on ${ PORT }`))
