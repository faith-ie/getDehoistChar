const fs = require('fs');
fs.writeFile(
  './DehoistChar.txt',
  String.fromCharCode(0x17b5),
  async function (err) {
    if (err) {
      console.log(err);
    }
  }
);