const express = require('express');
const app = express();

app.post('/upload', (req, res) => {
  req.on('data', () => {}); // Consume data, do nothing with it
  req.on('end', () => res.send('OK'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
