const http = require('http');

var server = http.createServer(
  (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.write('<!DOCTYPE html><html lang="ja">');
    response.write('<head><meta charset="utf-8">');
    response.write('<title>Hello</title></head>');
    response.write('<body><h1>My Name Is Moriyoshiko!</h1>');
    response.write('<p>This is Node.js sample page.</p>');
    response.write('<p>私が、モリヨシコです。</p>', 'utf8');
    response.write('</body></html>');
    response.end();
  }
);

var Port = normalizePort(process.env.PORT || '30003');
app.set('port',port);
console.log('Server start!');