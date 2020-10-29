import fs from 'fs';
import pageTitles from './pages';

const wiki = process.env['FOLDERS.WIKI'];

const pageData = (link, text) => ({
  title: pageTitles[link] || link,
  link: `/${link}`,
  text,
});

// files = files.filter(file => !file.startsWith('.'));
// files = files.filter(file => slugs.indexOf(file) < 0);
// files = files.filter(file => fs.lstatSync(`${dataFolder}/${file}`).isDirectory());
// files.filter(file => file.startsWith(letter))
const outputFiles = files => files
  .map(filename => pageData(filename.split('.').slice(0, -1).join('.')));

export default {
  all: () => new Promise((resolve, reject) => fs
    .readdir(wiki, (err, files) => (err
      ? reject(err)
      : resolve(outputFiles(files))
    ))),
  find: filename => new Promise((resolve, reject) => fs
    .readFile(`${wiki}/${filename}.md`, 'utf8', (err, text) => (err
      ? reject(err)
      : resolve(pageData(filename, text))
    ))),
};
