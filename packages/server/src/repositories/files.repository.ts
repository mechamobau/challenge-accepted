import { join, resolve } from 'path';
import { readFile } from 'fs';

type Location = {
  id: number;
  name: string;
  state: string;
  latitude: number;
  longitude: number;
};

interface IFileRepository {
  get: () => Promise<Location[]>;
}

class FileRepository implements IFileRepository {
  fileName: string;
  path: string;

  constructor(fileName: string) {
    this.fileName = fileName;
    this.path = resolve(__dirname, `../../data/${this.fileName}.json`);
  }

  get = <T extends any>() =>
    new Promise<T>((resolve, reject) => {
      readFile(this.path, (error, data) => {
        if (error) {
          reject(error);
          return;
        }

        resolve(JSON.parse(data.toString()) ?? []);
      });
    });
}

export default FileRepository;
