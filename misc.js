const api = require('./api')

exports.getSettings = () => api.get('settings')
