import fs from 'fs';
import config from '../config';

const pages = {
  'misheard-lyrics': 'Misheard lyrics',
  subkultury: 'Субкультуры',
  skomorohi: 'Скоморохи',
  'skomorohi-1': 'Скоморохи',
  skomoroshestvo: 'Скоморошество',
};

export default {
  all: () => new Promise((resolve) => {
    fs.readdir(config.pagesFolder, (err, files) => {
      if (err) throw err;
      // files = files.filter(file => !file.startsWith('.'));
      // files = files.filter(file => slugs.indexOf(file) < 0);
      // files = files.filter(file => fs.lstatSync(`${dataFolder}/${file}`).isDirectory());
      // files.filter(file => file.startsWith(letter))
      resolve(files.map((filename) => {
        const link = filename.split('.').slice(0, -1).join('.');
        return {
          title: pages[link] || link,
          link,
        };
      }));
    });
  }),
  find: filename => new Promise((resolve, reject) => {
    fs.readFile(`${config.pagesFolder}/${filename}.md`, 'utf8', (err, text) => {
      // if (err) throw err;
      if (err) return reject(err);
      resolve({ filename, text });
    });
  }),
};
