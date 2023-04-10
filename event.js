const EventEm = require('events');

class MeventEm extends EventEm {}
const Mevent = new MeventEm();
Mevent.on('event',()=> console.log('event triggered'));
Mevent.emit('event')

