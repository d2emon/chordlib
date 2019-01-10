import fs from 'fs';

export const getFiles = folder => new Promise(resolve => (
  fs.readdir(folder, (err, files) => {
    if (err) throw err;
    // resolve(files.filter(file => !file.startsWith('.')));
    resolve(files);
  })
));

export const getFolders = folder => getFiles(folder)
  .then(files => files.filter((file) => {
    try {
      return fs.lstatSync(`${folder}/${file}`).isDirectory();
    } catch (error) {
      // console.error(error);
      return false;
    }
  }));

export const getFoldersByLetter = (folder, letter) => getFolders(folder)
  .then(files => (
    (letter === null)
      ? files
      : files.filter(file => file.startsWith(letter))
  ));

export const getFile = filename => new Promise((resolve, reject) => {
  fs.readFile(filename, 'utf8', (err, text) => {
    if (err) throw err;
    // if (err) return reject(err);
    return resolve({
      filename,
      text,
    });
  });
});