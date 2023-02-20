function logger(namespace) {
  return function (...args) {
    console.log.apply(console, [namespace, ...args, ]);
  }
}

module.exports = logger;

let info = logger('INFO');
info('this is an info message');

// let warn = logger('WARN:');
// warn('this is a warning message', 'with more info');
