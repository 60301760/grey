const express = require('express');
const path = require('path');
const app = express();

// ✅ This serves everything inside public/ as if it's the root URL ("/")
app.use(express.static(path.join(__dirname, 'public')));

// Optional: Serve index.html from /public/views/
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'views', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Grey Coffee running at http://localhost:${PORT}`);
});