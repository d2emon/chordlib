import fs from 'fs';

const pagesFolder = './src/pages';

export default {
  all: () => new Promise((resolve) => {
    fs.readdir(pagesFolder, (err, files) => {
      if (err) throw err;
      // files = files.filter(file => !file.startsWith('.'));
      // files = files.filter(file => slugs.indexOf(file) < 0);
      // files = files.filter(file => fs.lstatSync(`${dataFolder}/${file}`).isDirectory());
      // files.filter(file => file.startsWith(letter))
      resolve(files.map(filename => filename.split('.').slice(0, -1).join('.')));
    });
  }),
  find: filename => new Promise((resolve) => {
    fs.readFile(`${pagesFolder}/${filename}.md`, 'utf8', (err, text) => {
      if (err) throw err;
      resolve({ filename, text });
    });
  }),
};
