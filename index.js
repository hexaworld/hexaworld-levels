var fs = require('fs')
var path = require('path')

var _ = require('lodash')

var levelsPath = path.join(__dirname, 'levels')
var levelNames = fs.readdirSync(levelsPath)
var getName = function (level) {
  return level.slice(0, -5)
}
var getJson = function (level) {
  return JSON.parse(fs.readFileSync(path.join(levelsPath, level)))
}
module.exports = _.zipObject(levelNames.map(function (level) { return getName(level) }),
                             levelNames.map(function (level) { return getJson(level) }))
