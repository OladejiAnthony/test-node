const express = require('express');

const app = express();
const port = 3000;


app.get('/api', (req, res) => {
  res.send('Hello from Node.js backend!');
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
