const http = require ('http');

http
  .createServer(function (req, res) {
    console.log('listening on port 3000...');
    res.write("hello web");
    res.end();
  })
  .listen(3000);