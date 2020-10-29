import fs from 'fs';
import debug from './debug';

export const getFiles = folder => new Promise(resolve => fs
  .readdir(folder, (err, files) => {
    if (err) {
      debug('files:error')(err);
      return resolve(null);
    }
    // resolve(files.filter(file => !file.startsWith('.')));
    return resolve(files);
  }));

export const getFolders = folder => getFiles(folder)
  .then(files => files.filter((file) => {
    try {
      return fs.lstatSync(`${folder}/${file}`).isDirectory();
    } catch (error) {
      return false;
    }
  }));

export const getFoldersByLetter = (folder, letter) => getFolders(folder)
  .then(files => (
    (letter === null)
      ? files
      : files.filter(file => file.startsWith(letter))
  ));

export const getFile = filename => new Promise(resolve => fs
  .readFile(filename, 'utf8', (err, text) => {
    if (err) {
      debug('files:error')(err);
      return resolve(null);
    }
    return resolve({
      filename,
      text,
    });
  }));
