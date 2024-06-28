const EventEmitter = require('node:events');
const logEvents = require('./logEvent');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('logs', (msg) => {
  logEvents(msg)
});
myEmitter.emit('logs', 'log emitted !');

.