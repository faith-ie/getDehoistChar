const fs = require('fs')
fs.writeFile('./DehoistChar.txt', String.fromCharCode((0x17B5)), async function (err) {
  if (err) {
    console.log(err)
  }
})
