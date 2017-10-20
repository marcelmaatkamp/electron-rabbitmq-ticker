Display the contents of the topic exchange 'input' in RabbitMQ with a ticker dispaying the number of messages received.

<img src="https://raw.githubusercontent.com/marcelmaatkamp/electron-rabbitmq-ticker/master/images/screenshot.png" height="300" />

# Binaries

| OS        | Filename          |
| ------------- |:-------------|
| Wndows      | [Electron-RabbitMQ-Ticker Setup 1.0.0.exe](raw/master/dist/Electron-RabbitMQ-Ticker%20Setup%201.0.0.exe) |
| MacOSX      | [Electron-RabbitMQ-Ticker-1.0.0.dmg](raw/master/dist/Electron-RabbitMQ-Ticker-1.0.0.dmg) |
| Linux      | []() |


# Build

If you want to make your own version these are the instructions to roll out your own binaries. These instructions are both the same for Windows, MacOSX and Linux.

## Build and start (debug) application

To start the application simply type:

```
 $ npm install && npm start
```

Or you like to use yarn:

```
 $ yarn add electron-builder --dev && yarn start
```

## Distribution

This will compile and link the final executable [Electron-RabbitMQ-1.0.0.dmg](https://github.com/marcelmaatkamp/electron-rabbitmq/blob/master/dist/Electron-RabbitMQ-1.0.0.dmg):

```
 $ yarn dist
```

## Test

To test send the message 'boe' to the topic 'input':

```
$ echo boe | amqp-publish -u amqp://rabbitmq -e input -r "some_sort_of_routing_key";
```
