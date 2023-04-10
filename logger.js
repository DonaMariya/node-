const EventEm = require('events');
const uuid=require('uuid');
class Logger extends EventEm{

     log(msg){

        this.emit('message', {id: uuid.v4(), msg});
  }
}
module.exports = Logger;