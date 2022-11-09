// const fs = require('fs');
// const zlib = require('zlib');
// const readStream = fs.createReadStream('./doc.txt');
// const writeStream = fs.createWriteStream('./new-text2.txt');
// const compressStream = zlib.createGzip();
//
// readStream.on('data', (chunk) => {
//   writeStream.write('\n <chunk> \n');
//   writeStream.write(chunk);
//   writeStream.write('\n </chunk> \n');
// })
// const handleError = () => {
//   console.error('Error');
//   readStream.destroy();
//   writeStream.end('Finished with error...');
// }
//
// readStream
//   .on('error', handleError)
//   .pipe(compressStream)
//   .pipe(writeStream)
//   .on('error', handleError)
const http = require('http');
const PORT = 5000;
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
   console.log('Server request');

   const createPath = (page) => path.resolve(__dirname, 'views', `${page}.html`);

   res.setHeader('Content-Type', 'text/html ')

  console.log(req.url);

  let basePath = path;

  switch (req.url) {
    case '/':
      basePath = createPath('index');
      res.statusCode = 200;
      break;
    case '/about-us':
      res.statusCode = 301;
      res.setHeader('Location', '/contacts');
      res.end();
      break
    case '/contacts':
      basePath = createPath('contacts');
      res.statusCode = 200;
      break
    default:
      basePath = createPath('error');
      res.statusCode = 404;
      break
  }
  fs.readFile(basePath, (err, data) => {
    if(err) {
      console.log(err);
      res.statusCode = 500;
      res.end();
    } else {
      res.write(data);
      res.end();
    }
    })
})

server.listen(5000, 'localhost', (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}`);
})