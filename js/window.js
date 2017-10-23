// Run this function after the page has loaded
$(() => {
  const settings = require('electron-settings')
  const log = require('~/js/log.js')

  var clock = $('.your-clock').FlipClock({
    clockFace: 'Counter',
    onStart: function() {
    },
    onStop: function() {
    },
    onReset: function() {
    }
  });

  var amqp = require('amqp-ts');
  log.info("Connecting to " + settings.get('rabbitmq.url') + ".exchange("+settings.get('rabbitmq.exchange_name')+").type("+settings.get('rabbitmq.exchange_type')+")")

  var connection = new amqp.Connection(settings.get('rabbitmq.url'));
  var topic = new amqp.Exchange(connection, settings.get('rabbitmq.exchange_name'), settings.get('rabbitmq.exchange_type'), {durable: true, internal: false});
  var queue = connection.declareQueue('', {exclusive: true});
  queue.bind(topic, '*');

  queue.activateConsumer((message) => {
    clock.increment()
    $('#message').text(message.getContent())
    message.ack();
  });

})
