const colors = require('colors')

exports.print = function(color = 'red') {
  console.log('[super]'[color])
}

