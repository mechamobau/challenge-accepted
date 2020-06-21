import express from 'express';

import localesRoutes from './entities/locales/locales.routes';
import weatherRoutes from './entities/weather/weather.routes';

import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/locales', localesRoutes);
app.use('/weather', weatherRoutes);

const PORT = process.env.PORT || 8000;

const DIRNAME = process.env.DIRNAME || '127.0.0.1';

app.listen(PORT, () => {
  console.log(`🚀 Server listening at http://${DIRNAME}:${PORT}`);
});
