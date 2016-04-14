var path = require('path');
var req = require.context('./', false, /\.(png|jpg|gif|js)$/);

module.exports = req.keys().reduce(function(obj, name) {
  var moduleName = path.basename(name).split(path.extname(name))[0];

  obj[moduleName] = req(name);
  return obj;
}, {});
