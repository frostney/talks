const fs = require('fs');
const path = require('path');

const FOLDER_PREFIX = './files';

const folders = fs.readdirSync(FOLDER_PREFIX)
  .filter(file => file.indexOf('.') < 0)
  .filter(folder => {
    try {
      const stats = fs.lstatSync(`${FOLDER_PREFIX}/${folder}/package.json`);

      return stats.isFile();
    } catch(e) {
      return false;
    }
  })
  .forEach(folder => {
    cd(`${FOLDER_PREFIX}/${folder}`);
    exec('npm install');
    exec('npm run build');
    cd('..');
    cd('..');
  })