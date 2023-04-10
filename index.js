const Logger = require('./logger');
const logger = new Logger();
logger.on('message',(data) => console.log('called listener' , data));
logger.log('Hey!!! Whats up');

// const Person = require('./person');
// const p = new Person('Dona', 22);
// const p2 = new Person('Sagar', 19);
// const p3 = new Person('Thomas', 16);
// const p4 = new Person('Akhila', 23);
// p.hello();
// p2.hello();
// p3.hello();
// p4.hello();