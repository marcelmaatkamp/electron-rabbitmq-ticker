// Run this function after the page has loaded
$(() => {
  const settings = require('electron-settings')
  const log = require('~/js/log.js')

  const {remote} = require('electron')
  const {Menu, MenuItem} = remote
  const menu = new Menu()
  menu.append(new MenuItem({label: 'MenuItem1', click() { console.log('item 1 clicked') }}))
  menu.append(new MenuItem({type: 'separator'}))
  menu.append(new MenuItem({label: 'MenuItem2', type: 'checkbox', checked: true}))

  window.addEventListener('contextmenu', (e) => {
    e.preventDefault()
    menu.popup(remote.getCurrentWindow())
  }, false)

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
