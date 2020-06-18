import express, { Request, Response } from 'express';
import FileRepository from '../repositories/files.repository';
import { localesRoutes } from '../routes';

export default {
  index: async (req: Request, res: Response) => {
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

      const locales = await localesRepository.get();

      res.send({
        data: locales.filter(locale => `${locale.id}` === req.params.id) ?? []
      });
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
