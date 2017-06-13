const WebSocketServer = require('ws').Server;
const wss = new WebSocketServer({ port: 7000 });

wss.broadcast = (data) => {
  wss.clients.forEach((client) => {
    client.send(data);
  });
};

// use like this:
wss.on('connection', (ws) => {
  console.log('On connection');

  ws.on('message', (message) => {
    wss.send('receive ' + message);
  });
});

setInterval(() => {
  wss.broadcast(parseInt(Math.random() * 200, 10))
}, 3000);
