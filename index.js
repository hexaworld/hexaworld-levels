var bulk = require('bulk-require')
module.exports = bulk(__dirname, 'levels/*.json').levels
