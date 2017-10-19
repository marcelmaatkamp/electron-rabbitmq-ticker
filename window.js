// Run this function after the page has loaded
$(() => {

 let Winston = require('winston');
 Winston.remove(Winston.transports.Console);
 const log = new Winston.Logger({
  level: 'verbose',
  transports: [
   new Winston.transports.Console({
    timestamp: true
   })
  ]
 });
 var amqp = require('amqp-ts');
 
 var connection = new amqp.Connection("amqp://guest:guest@rabbitmq");
 var topic = new amqp.Exchange(connection, "input", "topic", {durable: true, internal: false});
 var queue = connection.declareQueue('', {exclusive: true});
 queue.bind(topic, '*');

 queue.activateConsumer((message) => {
  log.info(message.getContent());
  $('#message').text(message.getContent())
  message.ack();
 });

})
