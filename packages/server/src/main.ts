import express from 'express';

import { localesRoutes } from './routes';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/locales', localesRoutes);

const PORT = process.env.PORT || 8000;

const DIRNAME = process.env.DIRNAME || '127.0.0.1';

app.listen(PORT, () => {
  console.log(`🚀 Server listening at http://${DIRNAME}:${PORT}`);
});
