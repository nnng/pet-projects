const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'screen-translator-backend' });
});

app.post('/translate', (req, res) => {
  const { text = '', from = 'auto', to = 'ru' } = req.body || {};
  // Временный mock-ответ для проверки e2e
  res.json({
    original: text,
    translated: `[mock ${from}->${to}] ${text}`,
  });
});

const PORT = process.env.PORT || 8787;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
