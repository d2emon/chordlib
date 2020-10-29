import fs from 'fs';

export const getFiles = folder => new Promise((resolve, reject) => (
  fs.readdir(folder, (err, files) => {
    if (err) return reject(err);
    // resolve(files.filter(file => !file.startsWith('.')));
    return resolve(files);
  })
));

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

export const getFile = filename => new Promise((resolve, reject) => {
  fs.readFile(filename, 'utf8', (err, text) => {
    if (err) return reject(err);
    return resolve({
      filename,
      text,
    });
  });
});
