const express = require('express');
const path = require('path');
const app = express();

// Serve static files from public/
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Grey Coffee running at http://localhost:${PORT}`);
});