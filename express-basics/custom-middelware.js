const express = require('express');
const app = express();

// Middleware to log timestamp, method, and URL
const requestTimestampLogger = (req, res, next) => {
  const timeStamp = new Date().toISOString();
  console.log(`${timeStamp} | ${req.method} to ${req.url}`);
  next();
};

app.use(requestTimestampLogger);

app.get('/', (req, res) => {
  res.send('Home page');
});

app.get('/about', (req, res) => {
  res.send('About page');
});

app.listen(4001, () => {
  console.log('Server is now running on port 4001');
});
