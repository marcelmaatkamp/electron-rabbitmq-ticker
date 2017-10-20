// Run this function after the page has loaded
$(() => {

const settings = require('electron-settings')


 var clock = $('.your-clock').FlipClock({
  clockFace: 'Counter',
  onStart: function() {
  },
  onStop: function() {
  },
  onReset: function() {
  }
 });

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

 log.info("connecting to " + settings.get('rabbitmq.url') + ".exchange("+settings.get('rabbitmq.exchange_name')+").type("+settings.get('rabbitmq.exchange_type')+")")

 var connection = new amqp.Connection("amqp://guest:guest@rabbitmq");
 var topic = new amqp.Exchange(connection, "input", "topic", {durable: true, internal: false});
 var queue = connection.declareQueue('', {exclusive: true});
 queue.bind(topic, '*');

 queue.activateConsumer((message) => {
  clock.increment()
  $('#message').text(message.getContent())
  message.ack();
 });

})
