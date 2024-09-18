const express = require('express');
//creates an Express application
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});
//starts the server
app.listen(1245);

module.exports = app;
