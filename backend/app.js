const express = require('express');
const app = express();
const connectDB = require('./config/database');

const port = 3000;

connectDB();

app.get('/', (req, res) => {
  res.send('Hello, FocusFlow Backend!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});