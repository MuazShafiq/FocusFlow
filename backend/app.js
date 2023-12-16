const express = require('express');
const app = express();
const routes = require('./routes/routes');
const port = 3000;

app.use('/api', routes);

app.get('/', (req, res) => {
  res.send('Hello, FocusFlow Backend!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});