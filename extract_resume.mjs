import fs from 'fs';
import pdfParse from 'pdf-parse';
const filePath = './public/Mathan_Java_Full_Stack_Resume.pdf';
const dataBuffer = fs.readFileSync(filePath);

const data = await pdfParse(dataBuffer);
console.log('numpages', data.numpages);
console.log('textStart');
console.log(data.text);
console.log('textEnd');
