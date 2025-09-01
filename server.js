// Minimal Bare server
const { createBareServer } = require('@tomphttp/bare-server-node');
const http = require('http');

const bare = createBareServer('/bare/');
const server = http.createServer();

server.on('request', (req, res) => {
  if (bare.shouldRoute(req)) {
    bare.routeRequest(req, res);
  } else {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Bare backend is running');
  }
});

server.on('upgrade', (req, socket, head) => {
  if (bare.shouldRoute(req)) {
    bare.routeUpgrade(req, socket, head);
  } else {
    socket.end();
  }
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Bare backend running on http://localhost:${PORT}/bare/`);
});
