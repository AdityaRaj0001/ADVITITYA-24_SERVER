
const express = require('express');


const app = express();


app.get('/', (req, res) => {
  res.send('Hello, world');
});


const PORT = 3000;
app.listen(PORT||process.env.PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
