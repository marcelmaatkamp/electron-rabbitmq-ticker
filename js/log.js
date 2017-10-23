let Winston = require('winston');
//Winston.remove(Winston.transports.Console);
const log = new Winston.Logger({
  level: 'verbose',
  transports: [
    new Winston.transports.Console({
      timestamp: true,
      prettyPrint: true,
      colorize: true,
      silent: false,
      json: false
    })
  ]
});
log.info("started logging")
module.exports = log
