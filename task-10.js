//питат за apply и bind на интервюта - разлики, прилики т.н.
//питат и за closure, e.g. real world example of closure

module.exports = function (namespace) {
    return function (...args) {
      console.log(namespace, ...args);
    }.bind(this);
};

/*   
//отговорът:
module.exports = function(namespace) {
      return console.log.bind(console, namespace)
    } */

// let info = logger('INFO');
// info('this is an info message');

// let warn = logger('WARN:');
// warn('this is a warning message', 'with more info');
