const path = require('path');
const hfs = require('./hfs');


module.exports = () => {
  return new Promise((resolve, reject) => {
    hfs.walk(path.join(__dirname, '../public/images'), (files, dirs) => {
      resolve(files.map((element) => {
        let i = element.indexOf('images');
        return element.substring(i);
      }));
    }, {
      sync: false
    });
  });
};
