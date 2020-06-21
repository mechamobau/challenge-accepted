import { Request, Response } from 'express';
import FileRepository from '../repositories/files.repository';

export type Locale = {
  id: number;
  name: string;
  state: string;
  latitude: number;
  longitude: number;
};

export default {
  index: async (_: Request, res: Response) => {
    try {
      const localesRepository = new FileRepository('locales');

      res.send({ data: await localesRepository.get() });
    } catch (err) {
      res.status(500).send({
        data: {
          message: 'Error on reading locale list',
          stacktrace: err
        }
      });
    }
  },
  show: async (req: Request, res: Response) => {
    try {
      const localesRepository = new FileRepository('locales');

      const locales = await localesRepository.get<Locale[]>();

      const foundLocales = locales.find(
        locale => `${locale.id}` === req.params.id
      );

      if (foundLocales) {
        res.send({
          data: foundLocales
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
