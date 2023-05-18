var cluster = require('cluster');
// node.js hellow world server
if (cluster.isMaster) {
  console.log(JSON.stringify(process.versions, null, 2));
  console.log('Creating 3 workers');
  var worker = cluster.fork();
  var worker1 = cluster.fork();
  var worker2 = cluster.fork();
} else {
  var http = require('http');
  http
    .createServer(function (req, res) {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Hello World');
    })
    .listen(1337);
  console.log(
    'Worker ' + cluster.worker.id + ' running at http://localhost:1337/ '
  );
}
