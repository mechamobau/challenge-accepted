import express from 'express';

const app = express();

const PORT = process.env.PORT || 8000;

const DIRNAME = process.env.DIRNAME || '127.0.0.1';

app.get('/', (req, res) => {
  return res.send({ data: 'Hello World!' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server listening at http://${DIRNAME}:${PORT}`);
});
