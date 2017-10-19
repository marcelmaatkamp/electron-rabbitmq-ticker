Simple RabbitMQ Electron Application to display messages send to a topic exchange 'input' in RabbitMQ.

## Build and start (debug) application

To start the application simply type:

```
 $ npm install && npm start
```

## Distribution

This will compile and link the final executable [Electron-RabbitMQ-1.0.0.dmg](https://github.com/marcelmaatkamp/electron-rabbitmq/blob/master/dist/Electron-RabbitMQ-1.0.0.dmg):

```
 $ yarn add electron-builder --dev
 $ yarn dist
```

## Test

To test send the message 'boe' to the topic 'input':

```
$ echo boe | amqp-publish -u amqp://rabbitmq -e input -r "some_sort_of_routing_key";
```
