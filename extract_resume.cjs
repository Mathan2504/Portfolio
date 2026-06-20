const fs = require('fs');
const pdf = require('pdf-parse');
const filePath = './public/Mathan_Java_Full_Stack_Resume.pdf';
const dataBuffer = fs.readFileSync(filePath);

pdf(dataBuffer)
  .then(data => {
    console.log('numpages', data.numpages);
    console.log('textStart');
    console.log(data.text);
    console.log('textEnd');
  })
  .catch(err => {
    console.error('ERROR', err);
    process.exit(1);
  });
