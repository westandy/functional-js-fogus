const existy = require('./existy');
const truthy = x => x !== false && existy(x);

module.exports = truthy;
