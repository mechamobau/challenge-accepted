import { Request, Response } from 'express';
import FileRepository from '../../repositories/files.repository';
import type { Locale } from '../locales/locales.controller';

export type Weather = {
  date: string;
  text: string;
  temperature: {
    min: number;
    max: number;
  };
  rain: {
    probability: number;
    precipitation: number;
  };
};

type Forecast = {
  period: {
    begin: string;
    end: string;
  };
  locale: Locale;
  weather: Weather[];
};

export default {
  show: async (req: Request, res: Response) => {
    try {
      const forecastRepository = new FileRepository('weather');

      const forecasts = await forecastRepository.get<Forecast[]>();

      const foundForecasts = forecasts.find(
        forecast => `${forecast.locale.id}` === req.params.location_id
      );

      if (foundForecasts) {
        res.send({
          data: foundForecasts
        });
      }

      res.status(404).send({ data: [] });
    } catch (err) {
      res.status(500).send({
        data: {
          message: 'Error on reading locale list',
          stacktrace: err
        }
      });
    }
  }
};
