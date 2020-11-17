const express = require('express');
const path = require('path');
const { PORT=5000, LOCAL_ADDRESS='localhost' } = process.env;

try {
  express()
  .use(express.static(path.join(__dirname, 'public')))
  .listen(PORT, LOCAL_ADDRESS, () => console.log(`Listening on http://${ LOCAL_ADDRESS }:${ PORT }`));
} catch (error) {
  console.error(error);
}

